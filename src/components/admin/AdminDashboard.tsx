import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { Download, Eye, RefreshCw, LogOut, Users } from "lucide-react";
import LeadDetailModal from "./LeadDetailModal";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedLead, setSelectedLead] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const leadsRef = collection(db, "leads");
      const q = query(leadsRef, orderBy("createdAt", "desc"));

      const querySnapshot = await getDocs(q);
      const leadsData: any[] = [];
      querySnapshot.forEach((doc) => {
        leadsData.push({ id: doc.id, ...doc.data() });
      });
      setLeads(leadsData);
      setErrorMsg(null);
    } catch (error: any) {
      console.error("Error fetching leads: ", error);
      try {
        const querySnapshot = await getDocs(collection(db, "leads"));
        const leadsData: any[] = [];
        querySnapshot.forEach((doc) => {
          leadsData.push({ id: doc.id, ...doc.data() });
        });

        leadsData.sort((a, b) => {
          if (!a.createdAt) return 1;
          if (!b.createdAt) return -1;
          return b.createdAt.seconds - a.createdAt.seconds;
        });

        setLeads(leadsData);
        setErrorMsg(null);
      } catch (e: any) {
        console.error("Fallback fetch also failed:", e);
        setErrorMsg(e.message || "Unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleViewDetails = (lead: any) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  // ✅ NEW PDF FUNCTION
  const exportAllToPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Leads Report", 14, 15);

    autoTable(doc, {
      startY: 25,
      head: [["Date", "Name", "Email", "Company", "Enquiry Type"]],
      body: leads.map((lead) => [
        lead.createdAt
          ? new Date(lead.createdAt.seconds * 1000).toLocaleDateString()
          : "N/A",
        `${lead.firstName || ""} ${lead.lastName || ""}`,
        lead.email || "",
        lead.organisation || "-",
        lead.enquiryType || "General",
      ]),
    });

    doc.save("leads.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <Users className="text-emerald-600" />
              Leads Dashboard
            </h1>
            <p className="text-slate-500 mt-1">Manage and export all your enquiries here.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchLeads}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg shadow-sm hover:bg-slate-50 hover:text-emerald-600 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>

            {/* ✅ UPDATED BUTTON */}
            <button
              onClick={exportAllToPDF}
              disabled={leads.length === 0 || loading}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg shadow-sm hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:bg-emerald-400"
            >
              <Download className="w-4 h-4" />
              Download All (PDF)
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg shadow-sm hover:bg-slate-900 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Name</th>
                  <th className="px-6 py-4 font-semibold">Email</th>
                  <th className="px-6 py-4 font-semibold">Company</th>
                  <th className="px-6 py-4 font-semibold">Enquiry Type</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                      <RefreshCw className="w-6 h-6 animate-spin text-emerald-600" />
                      <p>Loading leads...</p>
                    </td>
                  </tr>
                ) : leads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="px-6 py-4">
                      {lead.createdAt
                        ? new Date(lead.createdAt.seconds * 1000).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4">{lead.firstName} {lead.lastName}</td>
                    <td className="px-6 py-4">{lead.email}</td>
                    <td className="px-6 py-4">{lead.organisation || "-"}</td>
                    <td className="px-6 py-4">{lead.enquiryType || "General"}</td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => handleViewDetails(lead)}>
                        <Eye className="w-4 h-4" /> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <LeadDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lead={selectedLead}
      />
    </div>
  );
}