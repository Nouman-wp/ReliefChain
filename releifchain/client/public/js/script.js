document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.querySelector(".logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
            try {
                const response = await fetch("/logout", { method: "POST" });
                if (response.ok) {
                    window.location.href = "/"; // Redirect to home after logout
                }
            } catch (error) {
                console.error("Logout failed:", error);
            }
        });
    }
});
