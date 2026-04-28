import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

/**
 * Helper to flatten an object for CSV
 */
const flattenLead = (lead: any) => {
  return {
    "Date": lead.createdAt ? new Date(lead.createdAt.seconds * 1000).toLocaleString() : "N/A",
    "First Name": lead.firstName || "",
    "Last Name": lead.lastName || "",
    "Email": lead.email || "",
    "Phone": lead.phone || "",
    "Company": lead.organisation || "",
    "Job Title": lead.jobTitle || "",
    "Country": lead.country || "",
    "City": lead.city || "",
    "Enquiry Type": lead.enquiryType || "",
    "Service Area": lead.serviceArea || "",
    "Message": lead.message || "",
  };
};

/**
 * Export a list of leads to CSV
 */
export const exportAllToCSV = (leads: any[], filename = "all_leads.csv") => {
  if (!leads || leads.length === 0) return;

  const flattenedData = leads.map(flattenLead);
  const headers = Object.keys(flattenedData[0]);

  const csvRows = [];
  // Add headers
  csvRows.push(headers.join(","));

  // Add rows
  for (const row of flattenedData) {
    const values = headers.map(header => {
      const escaped = ('' + row[header as keyof typeof row]).replace(/"/g, '""');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(","));
  }

  const csvString = csvRows.join("\n");
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

/**
 * Export a single lead to CSV
 */
export const exportLeadToCSV = (lead: any) => {
  const filename = `lead_${lead.firstName}_${lead.lastName}.csv`.replace(/\s+/g, '_').toLowerCase();
  exportAllToCSV([lead], filename);
};

/**
 * Export a single lead to PDF
 */
export const exportLeadToPDF = (lead: any) => {
  const doc = new jsPDF();
  
  // Title
  doc.setFontSize(20);
  doc.setTextColor(5, 150, 105); // emerald-600
  doc.text("Ecoveda Climate - Lead Details", 14, 22);

  // Subtitle
  doc.setFontSize(10);
  doc.setTextColor(100);
  const dateStr = lead.createdAt ? new Date(lead.createdAt.seconds * 1000).toLocaleString() : "N/A";
  doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 30);
  
  // Create table data
  const flatLead = flattenLead(lead);
  const tableData = Object.entries(flatLead).map(([key, value]) => [key, value]);

  // Use autoTable
  autoTable(doc, {
    startY: 35,
    head: [["Field", "Value"]],
    body: tableData,
    theme: "striped",
    headStyles: { fillColor: [5, 150, 105] }, // emerald-600
    styles: { cellPadding: 4, fontSize: 10 },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 50 },
      1: { cellWidth: 130 }
    }
  });

  const filename = `lead_${lead.firstName}_${lead.lastName}.pdf`.replace(/\s+/g, '_').toLowerCase();
  doc.save(filename);
};
