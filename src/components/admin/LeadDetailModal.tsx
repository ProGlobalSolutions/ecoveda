import { X, Download, FileText } from "lucide-react";
import { exportLeadToCSV, exportLeadToPDF } from "../../utils/exportUtils";

interface LeadDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  lead: any | null;
}

export default function LeadDetailModal({ isOpen, onClose, lead }: LeadDetailModalProps) {
  if (!isOpen || !lead) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-xl font-bold text-slate-800">Lead Details</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 border-b border-slate-100 pb-2">Contact Information</h3>
              <div>
                <p className="text-xs text-slate-500 font-medium">Name</p>
                <p className="font-semibold text-slate-800">{lead.firstName} {lead.lastName}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Email</p>
                <a href={`mailto:${lead.email}`} className="font-semibold text-emerald-600 hover:underline">{lead.email}</a>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Phone</p>
                <a href={`tel:${lead.phone}`} className="font-semibold text-slate-800 hover:text-emerald-600">{lead.phone || "N/A"}</a>
              </div>
            </div>

            {/* Professional Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 border-b border-slate-100 pb-2">Professional Information</h3>
              <div>
                <p className="text-xs text-slate-500 font-medium">Organisation</p>
                <p className="font-semibold text-slate-800">{lead.organisation || "N/A"}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Job Title</p>
                <p className="font-semibold text-slate-800">{lead.jobTitle || "N/A"}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Location</p>
                <p className="font-semibold text-slate-800">{[lead.city, lead.country].filter(Boolean).join(", ") || "N/A"}</p>
              </div>
            </div>

            {/* Enquiry Info */}
            <div className="space-y-4 md:col-span-2 mt-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 border-b border-slate-100 pb-2">Enquiry Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 font-medium">Enquiry Type</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 mt-1">
                    {lead.enquiryType || "General"}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Service Area</p>
                  <p className="font-semibold text-slate-800">{lead.serviceArea || "N/A"}</p>
                </div>
              </div>
              
              <div className="pt-2">
                <p className="text-xs text-slate-500 font-medium mb-1">Message</p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-700 whitespace-pre-wrap text-sm leading-relaxed">
                  {lead.message || "No message provided."}
                </div>
              </div>
              
              <div className="pt-2">
                <p className="text-xs text-slate-500 font-medium">Submitted At</p>
                <p className="text-sm text-slate-600">
                  {lead.createdAt ? new Date(lead.createdAt.seconds * 1000).toLocaleString() : "Unknown"}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end gap-3">
          <button
            onClick={() => exportLeadToCSV(lead)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-emerald-600 transition-colors shadow-sm"
          >
            <FileText className="w-4 h-4" /> Export CSV
          </button>
          <button
            onClick={() => exportLeadToPDF(lead)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}




