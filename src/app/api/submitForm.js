export default async function handler(req, res) {
    if (req.method === 'POST') {
      const formData = req.body;  // This will be the form data sent from the client
  
      try {
        // Define the Pabbly Webhook endpoint (replace with your actual Pabbly webhook URL)
        const pabblyEndpoint = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzZTA0MzE1MjZhNTUzMzUxMzci_pc";
        
        // Prepare the data to send to Pabbly (map the form fields to Pabbly's expected format)
        const data = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          help: formData.help,
          additionalInfo: formData.additionalInfo
        };
  
        // Send the form data to Pabbly via a POST request
        const response = await fetch(pabblyEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        const result = await response.json();
        
        if (response.ok) {
          res.status(200).json({ message: "Form submitted successfully!" });
        } else {
          res.status(400).json({ message: "Failed to submit form", error: result });
        }
      } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
      }
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }
  