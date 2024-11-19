const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [] 
        },
        actions: {
        
            fetchContacts: async () => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/Julian");
                    const data = await response.json();
                    setStore({ contacts: data.contacts });
                } catch (error) {
                    console.log(error);
                }

            },

            // Acción para crear un nuevo contacto
            addContact: async (newContact) => {
                try{
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/Julian/contacts", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newContact)
                    });
                    const data = await response.json();
                    console.log(data);
                    fetchContacts();
                } catch (error) {
                    console.log(error);
                }

            },

            // Acción para actualizar un contacto
            updateContact: async (id, updatedContact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Julian/contacts/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(updatedContact)
                    });
            
                    if (!response.ok) throw new Error("Failed to update contact");
            
                    const updatedData = await response.json();
            
                    // Actualizar el estado global con el contacto modificado
                    setStore({
                        contacts: getStore().contacts.map(contact =>
                            contact.id === parseInt(id) ? updatedData : contact
                        )
                    });
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            },

            createAgenda: async () => {
              try {
                const response = await fetch("https://playground.4geeks.com/contact/agendas/Julian", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify()
                });
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
            },

            // Acción para eliminar un contacto
            deleteContact: async (id) => {
                try{
                    await fetch(`https://playground.4geeks.com/contact/agendas/Julian/contacts/${id}`, {
                        method: "DELETE"
                    });
                } catch (error) {
                    console.log(error);
                }
            }
        }
    };
};

export default getState;
