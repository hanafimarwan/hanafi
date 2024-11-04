import { User } from "../api/get";

export function hasCursor(): boolean {
    const isTouchDevice:boolean = window.matchMedia("(pointer: coarse)").matches;
    const userAgent:string = navigator.userAgent.toLowerCase();
    const isMobileDevice:boolean = /android|iphone|ipad|ipod|mobile|tablet/.test(userAgent);
    return !isTouchDevice || !isMobileDevice;
  }

export function setUrl(url:string):void{
    localStorage.setItem("url", url);
} 
export function getUrl(): string | null {
    return localStorage.getItem("url");
}

const convertToXML = (users: User[]):string => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<users>\n';
    users.forEach(user => {
        xml += `  <user id="${user.id}" type='user'>\n`;
        xml += `    <email>${user.email}</email>\n`;
        xml += `    <password>${user.password}</password>\n`;
        xml += `    <date>${user.date}</date>\n`;
        xml += `  </user>\n`;
    });
    xml += '</users>';
    return xml;
};


export const handleDownload = (users:User[]) => {
    // Convert users array to XML
    const xmlData = convertToXML(users);

    // Create a Blob from the XML string
    const blob = new Blob([xmlData], { type: 'application/xml' });
    
    // Create a link element
    const link = document.createElement('a');
    
    // Set the href to the blob URL
    link.href = URL.createObjectURL(blob);
    
    // Set the download attribute with a filename
    link.download = 'data_All_Users.xml';
    
    // Append the link to the body
    document.body.appendChild(link);
    
    // Programmatically click the link to trigger the download
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
};

const convertToCSV = (users: User[]) => {
    // CSV header
    const header = 'id,email,password,date\n';
    
    // Map over users to create rows
    const rows = users.map(user => {
        // Create an array of user properties
        return [user.id, user.email, user.password, user.date].join(','); // Join them into a CSV row
    }).join('\n'); // Join all rows with new line

    return header + rows; // Combine header and rows
};


export const handleDownloadCsv = (users:User[]) => {
    // Convert users array to CSV
    const csvData = convertToCSV(users);

    // Create a Blob from the CSV string
    const blob = new Blob([csvData], { type: 'text/csv' });

    // Create a link element
    const link = document.createElement('a');

    // Set the href to the blob URL
    link.href = URL.createObjectURL(blob);

    // Set the download attribute with a filename
    link.download = 'data_All_Users.csv';

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
};

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));