import React, {useState} from 'react'


const SubmissionForm = (e) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState();
    const [selectedOption, setSelectedOption] =
        useState("");
    const [about, setAbout] = useState("");


    // submission
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
            selectedOption,
            subjects,
            resume,
            url,
            about
        );
        // Add your form submission logic here
    };


    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };
    // 
    const handleReset = () => {
        // Reset all state variables here
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };

  return (
    <div className='App'>
        <h1>Form in React</h1>
        <fieldset>
            <form action='#' method='get'>
                <label for="firstname">First Name*</label>
                <input type='text' name='firstname' value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='Enter Your First Name' required />

                <label for="lastname">Last Name*</label>
                <input type='text' name='lastname' value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Enter Your Last Name' required />

                <label for="email">Email*</label>
                <input type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter Your email ' required />

                <label for="tel">Contact*</label>
                <input type='tel' name='contact' value={contact} onChange={(e)=>setContact(e.target.value)}  placeholder='Enter Your Contact ' required />

                <label for="gender">Gender*</label>
                <input type='radio' id='male' name='gender' value={gender} onChange={(e)=>setGender(e.target.value)}  checked={gender === 'male'} required /> Male

                <input type='radio' id='female' name='gender' value={gender} onChange={(e)=>setGender(e.target.value)} checked={gender === 'female'} required /> Female

                <input type='radio' id='other' name='gender' value={gender} onChange={(e)=>setGender(e.target.value)} checked={gender === 'other'} required /> Other

                <label for="lang">Your best Subject</label>
                <input type="checkbox" name="lang"  id="english" checked={subjects.english === true}
                 onChange={(e) =>
                    handleSubjectChange("english")
                }
                  /> English

                <input type="checkbox" name="lang"  id="math" checked={subjects.maths === true} 
                onChange={(e) =>
                  handleSubjectChange("maths")
                 } 
                /> Maths

                <input type="checkbox" name="lang"  id="physics" checked={subjects.physics === true}
                 onChange={(e) =>
                    handleSubjectChange("physics")
                }
                 /> Physics

                <label htmlFor="file">Upload Resume*</label>
                <input type="file" name='file' 
                id='file' value={resume}  
                onChange={(e) =>
                    setResume(e.target.resume[0])
                }
                 placeholder='Enter Upload File' required />

                <label for="url">Enter URL*</label>
                    <input type="url"  name="url" id="url" value={url}  onChange={(e) =>  setUrl(e.target.value)}
                        placeholder="Enter url"
                        required
                    />
                    <select
                        name="select"
                        id="select"
                        value={selectedOption}
                        onChange={(e) =>
                            setSelectedOption(
                                e.target.value
                            )
                        }
                    >
                        <option
                            value=""
                            disabled
                            selected={selectedOption === ""}
                        >
                            Select your Ans
                        </option>
                        <optgroup label="Beginners">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">
                                JavaScript
                            </option>
                        </optgroup>
                        <optgroup label="Advance">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">
                                Express
                            </option>
                            <option value="t">
                                MongoDB
                            </option>
                        </optgroup>
                    </select>

                    <label for="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        value={about}
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                            setAbout(e.target.value)
                        }
                        placeholder="About your self"
                        required
                    ></textarea>
                    <button type="reset"  value="reset" onClick={()=>handleReset()}> Reset </button>
                    <button type="submit" value="Submit" onClick={()=>handleSubmit(e)} >Submit</button>
            </form>
        </fieldset>
    </div>
  )
}

export default SubmissionForm