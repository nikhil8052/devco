


// Submit the data to the Pably 
export async function submitToPably(params) {
    
    const pabblyEndpoint = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzZTA0MzE1MjZhNTUzMzUxMzci_pc";
    var formData = params.body;
   

    const response = await fetch(pabblyEndpoint, params);

    console.log(response)


}