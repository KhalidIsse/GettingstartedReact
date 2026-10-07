import { useState } from "react";


const initialFormData = {
    fullName: "",
    email: "",
    ticketType: "Standard",
    tickets: 1,
    agreedToTerms: false,
};

const EventRegistration = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [registrations, setRegistrations] = useState([]);
    const [termsError, setTermsError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email) {
            alert("Please enter your full name and email.");
            return;
        }

        if (!formData.agreedToTerms) {
            setTermsError("Please accept the terms and conditions before registering.");
            return;
        }

        setTermsError("");

        const newRegistration = {
            id: crypto.randomUUID(),
            ...formData,
        };

        setRegistrations([...registrations, newRegistration]);
        setFormData(initialFormData);
    };

    const handleRemove = (registrationId) => {
        setRegistrations((currentRegistrations) =>
            currentRegistrations.filter(
                (registration) => registration.id !== registrationId
            )
        );
    };

    const totalTickets = registrations.reduce(
        (total, registration) => total + registration.tickets,
        0
    );

    return (
        <div className="event-page">
            <main className="registration-card">
                <header className="card-header">
                    <p className="eyebrow">JOIN THE EVENT</p>
                    <h1>Event Registration</h1>
                    <p>Complete the form below to reserve your place.</p>
                </header>

                <form className="registration-form" onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-field">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={(e) =>
                                    setFormData({ ...formData, fullName: e.target.value })
                                }
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="ticketType">Ticket Type</label>
                            <select
                                id="ticketType"
                                value={formData.ticketType}
                                onChange={(e) =>
                                    setFormData({ ...formData, ticketType: e.target.value })
                                }
                            >
                                <option value="Standard">Standard</option>
                                <option value="Premium">Premium</option>
                            </select>
                        </div>

                        <div className="form-field">
                            <label htmlFor="tickets">Number of Tickets</label>
                            <input
                                type="number"
                                id="tickets"
                                min="1"
                                value={formData.tickets}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        tickets: Math.max(1, Number(e.target.value) || 1),
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className="terms-container">
                        <label
                            className={`checkbox-row ${termsError ? "has-error" : ""}`}
                            htmlFor="agreedToTerms"
                        >
                            <input
                                type="checkbox"
                                id="agreedToTerms"
                                checked={formData.agreedToTerms}
                                onChange={(e) => {
                                    const agreed = e.target.checked;

                                    setFormData({
                                        ...formData,
                                        agreedToTerms: agreed,
                                    });

                                    if (agreed) {
                                        setTermsError("");
                                    }
                                }}
                            />
                            <span>I agree to the terms and conditions.</span>
                        </label>

                        {termsError && (
                            <p className="field-error" role="alert">
                                {termsError}
                            </p>
                        )}
                    </div>

                    <button className="register-button" type="submit">
                        Register Now
                    </button>
                </form>

                <section className="registrations-section">
                    <div className="registrations-heading">
                        <div>
                            <h2>Registrations</h2>
                            <p>
                                {registrations.length} people registered · {totalTickets} tickets
                                booked
                            </p>
                        </div>
                    </div>

                    {registrations.length === 0 ? (
                        <p className="empty-message">
                            No registrations yet. Your submitted registrations will appear here.
                        </p>
                    ) : (
                        <ul className="registration-list">
                            {registrations.map((registration) => (
                                <li className="registration-item" key={registration.id}>
                                    <div>
                                        <h3>{registration.fullName}</h3>
                                        <p>{registration.email}</p>
                                        <div className="ticket-details">
                                            <span>{registration.ticketType}</span>
                                            <span>
                                                {registration.tickets}{" "}
                                                {registration.tickets === 1 ? "ticket" : "tickets"}
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        className="remove-button"
                                        type="button"
                                        onClick={() => handleRemove(registration.id)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </main>
        </div>
    );
};

export default EventRegistration;