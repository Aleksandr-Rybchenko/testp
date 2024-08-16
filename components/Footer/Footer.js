export function Footer() {
    const footer = document.createElement('footer');
    footer.classList.add('container');
    footer.innerHTML = `
        <div>
            <button class="btn-footer">Boost my website conversion</button>
            <p>
                So, it’s high time for you to stop losing 99% of potential clients due
                to being unaware of your website users’ behavior patterns and needs.
            </p>
        </div>
  `;
    return footer;
}
