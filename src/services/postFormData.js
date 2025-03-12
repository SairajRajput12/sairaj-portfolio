const VITE_ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export default async function postData(formData) {
        console.log(formData); 
        formData.append("access_key", VITE_ACCESS_TOKEN);
        console.log(formData); 
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            return {"message":"Data submitted succesfully !!","code":200};
        } else {
            return {"message":"Faced Error while posting data in backend !!","code":404}
        }        
}
