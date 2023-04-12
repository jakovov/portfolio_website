import emailjs from 'emailjs-com';
import { useState } from "react";

function useEmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isError, setIsError] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;
    const maxMessageLength = 1000;
  
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !emailRegex.test(formData.email) ||
      formData.message.length > maxMessageLength
    ) {
      setIsError(true);
      setTimeout(() => setIsError(false), 2000);
      setShowMessage(false);
      setIsSubmitted(false);
    } else {
      setIsError(false);
      emailjs
        .sendForm(
          "service_j275tt5",
          "template_2rf6unp",
          event.target,
          "2tVcCXHvWdfqayjza"
        )
        .then(
          (result) => {
            console.log(result.text);
            setTimeout(() => setShowMessage(false), 2000);
            setShowMessage(true); // Set the success message to true
            setIsSubmitted(true);
          },
          (error) => {
            console.log(error.text);
            setIsError(true);
            setTimeout(() => setIsError(false), 2000);
            setShowMessage(false);
            setIsSubmitted(false);
          }
        );
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  

  return { formData, handleInputChange, handleSubmit, isError, setIsError, showMessage, isSubmitted };
}

export default useEmailForm;







