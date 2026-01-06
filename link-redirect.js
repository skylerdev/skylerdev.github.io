const linkKey = document.documentElement.getAttribute("data-link-key");
const statusEl = document.querySelector("[data-redirect-status]");
const fallbackLink = document.querySelector("[data-redirect-fallback]");

async function resolveLink() {
    if (!linkKey) {
        return null;
    }

    try {
        const response = await fetch("/links.json", { cache: "no-store" });
        if (!response.ok) {
            return null;
        }
        const links = await response.json();
        return links[linkKey] || null;
    } catch (error) {
        return null;
    }
}

resolveLink().then((target) => {
    if (!target) {
        if (statusEl) {
            statusEl.textContent = "Link not found.";
        }
        return;
    }

    if (fallbackLink) {
        fallbackLink.setAttribute("href", target);
    }

    if (statusEl) {
        statusEl.textContent = "Redirecting now...";
    }

    window.location.replace(target);
});
