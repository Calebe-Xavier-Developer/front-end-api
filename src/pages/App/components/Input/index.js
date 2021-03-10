import React, {useState} from 'react';
import api from '../../../../services/api';
import './style.css';

const Input = () => {
    const [selectedFile, setselectedFile] = useState("");
    const pegaArquivos = () => {
        var formData = new FormData();
        formData.append("Name", "Nome");
        formData.append("File", selectedFile);
        console.log(formData);
       api.post('uploadfiles', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        
    }
    

    return (
        <form>
            <input 
                type="file"
                onChange={(e) => setselectedFile(e.target.files[0])}
            />
            <button type="submit" onClick={pegaArquivos()}>Upload</button>
        </form>
    )
}

export default Input


