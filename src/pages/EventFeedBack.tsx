import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
interface FeedbackData {
name: string;
email: string;
feedback: string;
}
function EventFeedBack() {
// Uncontrolled Form Refs
const nameRef = useRef<HTMLInputElement>(null);
const emailRef = useRef<HTMLInputElement>(null);
const feedbackRef = useRef<HTMLTextAreaElement>(null);
// Uncontrolled Submit
const handleUncontrolledSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
if (nameRef.current && emailRef.current && feedbackRef.current) {
const data: FeedbackData = {
name: nameRef.current.value,
email: emailRef.current.value,
feedback: feedbackRef.current.value
};
console.log("Uncontrolled Form Data:", data);
alert("Has Summited.");
}
};
return (
<div style={{ padding: "40px", fontFamily: "Arial" }}>
<h1>Student Feedback</h1>
<hr style={{ margin: "40px 0" }}/>
{/* Uncontrolled Form */}
<h2>Uncontrolled Form</h2>
<form onSubmit={handleUncontrolledSubmit}>
<div>
<label>Name:</label><br/>
<input type="text" ref={nameRef}/>
</div>
<br/>
<div>
<label>Email:</label><br/>
<input type="text" ref={emailRef}/>
</div>
<br/>
<div>
<label>Feedback:</label><br/>
<textarea ref={feedbackRef}/>
</div>
<br/>
<button type="submit">
Submit
</button>
</form>
</div>
);
}
export default EventFeedBack;