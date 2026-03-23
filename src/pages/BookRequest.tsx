import { useState, useRef, type FormEvent, type ChangeEvent } from "react";

interface FeedbackData {
studentName: string;
studentId: string;
bookTitle: string;
author: string;
reason: string;
request: string;
}
function BookRequest() {
// Controlled Form State
const [studentName, setStudentName] = useState<string>("");
const [studentId, setStudentId] = useState<string>("");
const [bookTitle, setBookTitle] = useState<string>("");
const [author, setAuthor] = useState<string>("");
const [reason, setReason] = useState<string>("");
const [request, setRequest] = useState<string>("");
const [submittedData, setSubmittedData] = useState<FeedbackData | null>(null);
// Controlled Submit
const handleControlledSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
const data: FeedbackData = {
studentName,
studentId,
bookTitle,
author,
reason,
request
};
setSubmittedData(data);
setStudentName("");
setStudentId("");
setBookTitle("");
setAuthor("");
setReason("");
setRequest("");
};

return (
<div style={{ padding: "40px", fontFamily: "Arial" }}>
<h1>Student Feedback</h1>
{/* Controlled Form */}
<h2>Controlled Form</h2>
<form onSubmit={handleControlledSubmit}>
<div>
<label>Student Name:</label><br/>
<input
type="text"
value={studentName}
onChange={(e: ChangeEvent<HTMLInputElement>) =>
setStudentName(e.target.value)
}
/>
</div>
<br/>
<div>
<label>Student Id:</label><br/>
<input
type="text"
value={studentId}
onChange={(e: ChangeEvent<HTMLInputElement>) =>
setStudentId(e.target.value)
}
/>
</div>
<br/>
<div>
<label>Book Title:</label><br/>
<textarea
value={bookTitle}
onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
setBookTitle(e.target.value)
}
/>
</div>
<br/>
<div>
<label>Author:</label><br/>
<textarea
value={author}
onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
setAuthor(e.target.value)
}
/>
</div>
<br/>
<div>
<label>Reason:</label><br/>
<textarea
value={reason}
onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
setReason(e.target.value)
}
/>
</div>
<br/>
<div>
<label>Request:</label><br/>
<textarea
value={request}
onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
setRequest(e.target.value)
}
/>
</div>
<br/>
<button type="submit">
Submit
</button>
</form>
{/* Display Controlled Data */}
{submittedData && (
<div style={{ marginTop: "20px" }}>
<h3>Submitted Feedback</h3>
<p><strong>Student Name:</strong> {submittedData.studentName}</p>
<p><strong>Student ID:</strong> {submittedData.studentId}</p>
<p><strong>Book Title:</strong> {submittedData.bookTitle}</p>
<p><strong>Author:</strong> {submittedData.author}</p>
<p><strong>Reason:</strong> {submittedData.reason}</p>
<p><strong>Request:</strong> {submittedData.request}</p>
</div>
)}

</div>
);
}
export default BookRequest;