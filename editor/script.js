const mascotBase64 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpjMnBhPSJodHRwOi8vYzJwYS5vcmcvbWFuaWZlc3QiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPgogIDxtZXRhZGF0YT48L21ldGFkYXRhPgogIDxwYXRoIGZpbGw9IiNGRDcxMjAiIGQ9Ik05MS45Nzc0IDQ5OC43NzhDOTAuNjI5MyA0NDEuMjM5IDExMi42MDkgMzgxLjU0IDE0My4yODIgMzMzLjcxOUMxNjkuMDY4IDI5My41MTggMjA0LjEyNyAyNTQuMDI0IDI0Ny42NTQgMjk5Ljc3OEMyNzguOTE2IDMzMi42MzkgMjk2LjE3NyAzNjkuMjM2IDMwNi43OTcgNDEyLjkyNkMzMjkuMjkgNDEzLjQ4MyAzNTguODY1IDQyMi4wNyAzNzkuNDEgNDMxLjA4MUMzODcuNSA0MzQuNjI5IDM5NC43NDYgNDM4LjUzMiA0MDIuNTI5IDQ0Mi40MDdDNDQwLjAzNyA0MTAuNzU4IDQ5OC4wNyAzODMuMTY2IDU0OC40NzIgMzg0Ljk5OEM1ODIuODIxIDM4Ni4yNDcgNTg0LjIwNSA0MzAuNDExIDU4MC43MDggNDU1LjI0OUM1NzMuNjgzIDUxNi4xNjEgNTUxLjEwOSA1NzcuMTQ0IDUwOS4yNjMgNjIyLjc3OEM1MTEuMjI3IDYzNy44MiA1MTUuMzA1IDY1NC43MDQgNTE1LjU4IDY2OS44NDJDNTE4LjYwNCA2NjcuNjQxIDUyMS41ODggNjY1LjM0MyA1MjQuODg3IDY2My41OUM1NTQuMzMxIDYyOC40NzQgNTk2LjM3MiA2MDUuMTY2IDY0MC40ODkgNTk0LjExNEM2NDkuNTk1IDU5MS44MzMgNjU4Ljk2IDU4OS41NDMgNjY4LjMyOCA1ODguNzM4QzY4MC43NCA1ODcuNjcgNjk2LjEzOCA1ODYuMzY1IDcwNi40MTUgNTk0Ljg2OEM3MjQuMjI4IDYwOS42MDQgNzQwLjY0OSA2NzQuNzcgNzQ1LjA1NyA2OTguMzY1Qzc0Ny42NzcgNzEyLjM4OCA3NDkuMzEgNzI2Ljc3MyA3NTAuMzc1IDc0MC45OTJDNzUxLjYyOCA3NTcuNzA3IDc1Mi4yMzggNzc1LjEyMSA3NTEuNDM3IDc5MS44NjNDNzUxLjM4OSA4MDEuOTExIDc1MC4zMiA4MTIuMDI3IDc0OS4yNTMgODIyLjAxQzc0Mi42MTkgODg0LjA0MSA3MTYuMjE0IDk0MS44OCA2NzEuODc3IDk4NS44OTlDNjU3LjIzOCAxMDAwLjI2IDY0MS4xMjQgMTAxMy4wMyA2MjMuODAzIDEwMjRMMjYxLjI1NCAxMDI0TDI0OS44MzIgMTAyNEw5NC4zNjA1IDEwMjRDNDguMzc0OSA5ODYuMzIzIDMwLjA1NDggOTI0LjAzMSA0MC4zMTk5IDg2Ni41MTZDNDkuNTM5MiA4MTUuNzk3IDc0Ljk5MTUgNzY5LjQ0OSAxMTIuODQyIDczNC40NTNDMTI1LjA1OCA3MjMuMjQ0IDEzNS4yNzMgNzE2LjExOCAxNDguNzk1IDcwNi42OUMxNDIuNzg4IDcwMi40NDEgMTM2LjAzNSA2OTguOTY3IDEyOS45ODIgNjk0LjYwMkM5NC43MDc3IDY2OS4xNjggNTkuODIxOSA2MzYuNjI5IDQ0Ljg4OTggNTk0LjY5NEM0MS44NDMyIDU4Ni4xMzggNDAuNjg2OSA1NzYuODg0IDQwLjAzOTUgNTY3Ljk3NEMzOS41MTgyIDU1MS4wMTYgNDQuNzk4MyA1NDEuNTk5IDU2LjUxMDEgNTI5LjUwN0M2Ni4xMTQyIDUxOS41OTEgODAuNTcwNCA1MDYuNDI4IDkxLjk3NzQgNDk4Ljc3OFoiPjwvcGF0aD4KICA8cGF0aCBmaWxsPSIjRkNFNEM2IiBkPSJNNDAuMDM5NSA1NjcuOTc0Qzk0LjgyOTQgNTc4LjcyNCAxNDEuODY3IDUxNy4yMjYgMTk3Ljc4NCA1MzguNThDMjMxLjQ0NyA1NTEuNDM1IDI0Ni41NjYgNTkxLjAwNyAyNTUuOTI5IDYyMy4yNDhDMjYwLjU4NSA2MjAuNzc4IDI2NC40MDQgNjIwLjI0NCAyNjkuNjY5IDYyMS4yMDhDMjc5LjA5NSA2MjIuOTM0IDI5NC42NzkgNjI2LjYzOSAyOTkuMDc2IDYzNi40MDNDMzA5LjExMyA2MzEuMTM5IDMxNy4wOTQgNjI1LjMyMyAzMjYuNjMgNjE5LjMzMUMzNTAuMDMzIDYwNC42MjQgMzc3LjM3OCA1OTEuNDA1IDQwNS4zNjIgNjAwLjMxMkM0MzMuNTAzIDYwOS4yNyA0NDguMzE1IDYzMi4zMzggNDYxLjc3NiA2NTYuODczQzQ2OC45MzEgNjY5LjkxMyA0NzUuMTc2IDY4MS4xMzIgNDg2LjQ2OSA2OTEuMjkyQzQ3Ni45NDkgNzAwLjA0OSA0NjcuODAzIDcwOS4yMDUgNDU5LjA1NiA3MTguNzM1QzQ1NC41NDQgNzIzLjY3IDQ0MC44NzQgNzQxLjAwMiA0MzYuOTY4IDc0My42MDFDNDM0Ljk2NSA3NDguOTQ1IDQyMC43MTMgNzY2Ljg1OSA0MTYuNjMyIDc3Mi42NjZDMzYwLjY2NyA4NTIuMjk3IDMzMi4wMTQgOTU1LjIzNSAyNjEuMjU0IDEwMjRMMjQ5LjgzMiAxMDI0TDk0LjM2MDUgMTAyNEM0OC4zNzQ5IDk4Ni4zMjMgMzAuMDU0OCA5MjQuMDMxIDQwLjMxOTkgODY2LjUxNkM0OS41MzkyIDgxNS43OTcgNzQuOTkxNSA3NjkuNDQ5IDExMi44NDIgNzM0LjQ1M0MxMjUuMDU4IDcyMy4yNDQgMTM1LjI3MyA3MTYuMTE4IDE0OC43OTUgNzA2LjY5QzE0Mi43ODggNzAyLjQ0MSAxMzYuMDM1IDY5OC45NjcgMTI5Ljk4MiA2OTQuNjAyQzk0LjcwNzcgNjY5LjE2OCA1OS44MjE5IDYzNi42MjkgNDQuODg5OCA1OTQuNjk0QzQxLjg0MzIgNTg2LjEzOCA0MC42ODY5IDU3Ni44ODQgNDAuMDM5NSA1NjcuOTc0WiI+PC9wYXRoPgogIDxwYXRoIGZpbGw9IiNGRDcxMjAiIGQ9Ik0xNDguNzk1IDcwNi42OUMxNTMuODIyIDcwOC43OTcgMTYwLjI1MyA3MTIuNzI4IDE2NS4zMjIgNzE1LjMxMkMxNzMuMjAzIDcxOS4zMjkgMTgxLjA2MyA3MjMuMjY0IDE4OSA3MjcuMTc2QzE2MC4wNTEgNzQ5LjIyOSAxMzUuMTcyIDc4MC43ODkgMTI5Ljk1OSA4MTcuOTQyQzEyNS4zNjkgODUwLjY1NiAxMzkuMTU3IDg4My40MDggMTU5LjY4MyA5MDkuN0MxNzkuMjc0IDkzNC43OTMgMjEwLjc4OCA5NjEuNjY3IDI0MC43MzMgOTc0LjYyQzI0MS4wNTUgOTc0Ljc1OSAyNDEuNDA3IDk3NC41ODQgMjQxLjcxOCA5NzQuNDg0QzI0My41NSA5OTEuMDg0IDI0NC40NjYgMTAwOC4wMSAyNDkuODMyIDEwMjRMOTQuMzYwNSAxMDI0QzQ4LjM3NDkgOTg2LjMyMyAzMC4wNTQ4IDkyNC4wMzEgNDAuMzE5OSA4NjYuNTE2QzQ5LjUzOTIgODE1Ljc5NyA3NC45OTE1IDc2OS40NDkgMTEyLjg0MiA3MzQuNDUzQzEyNS4wNTggNzIzLjI0NCAxMzUuMjczIDcxNi4xMTggMTQ4Ljc5NSA3MDYuNjlaIj48L3BhdGg+CiAgPHBhdGggZmlsbD0iI0U2NUMxQyIgZD0iTTMyNy42OCA3NTguNDg3QzM3MC44NzEgNzU5LjI4MyAzOTYuMDUgNzU2LjU0NiA0MzYuOTY4IDc0My42MDFDNDM0Ljk2NSA3NDguOTQ1IDQyMC43MTMgNzY2Ljg1OSA0MTYuNjMyIDc3Mi42NjZDMzYwLjY2NyA4NTIuMjk3IDMzMi4wMTQgOTU1LjIzNSAyNjEuMjU0IDEwMjRMMjQ5LjgzMiAxMDI0QzI0NC40NjYgMTAwOC4wMSAyNDMuNTUgOTkxLjA4NCAyNDEuNzE4IDk3NC40ODRDMjM3LjkzNCA5MTUuOTM3IDI2MC44NDcgODQ5LjEwMiAyOTMuMTQ5IDgwMC45NUMzMDMuNTcxIDc4NS40MTMgMzE1LjE5NCA3NzIuMzAxIDMyNy42OCA3NTguNDg3WiI+PC9wYXRoPgogIDxwYXRoIGZpbGw9IiMzODM4MzgiIGQ9Ik0yNTUuOTI5IDYyMy4yNDhDMjYwLjU4NSA2MjAuNzc4IDI2NC40MDQgNjIwLjI0NCAyNjkuNjY5IDYyMS4yMDhDMjc5LjA5NSA2MjIuOTM0IDI5NC42NzkgNjI2LjYzOSAyOTkuMDc2IDYzNi40MDNDMjk4LjQ0MSA2NDkuNTI5IDI4OC41ODcgNjUyLjI3MSAyNzcuNjMzIDY1NC4yNUMyNzUuODIyIDY1OS40NTEgMjc0LjY4NSA2NjQuOTU3IDI3OC45NDQgNjY4LjkwN0MyODcuMDYxIDY3Ni40MzYgMjk1LjEwNyA2NzAuNTA4IDMwMi45NTUgNjY5LjYyMUMzMTAuNjk2IDY3MC43NjcgMzA5LjA3IDY4MS4zMTkgMzAzLjgyNSA2ODMuODM4QzI4OS41OTEgNjkwLjY3NCAyNzMuMjI4IDY4NS4zMTQgMjY0LjQxMiA2NzIuOTI2QzI0OS4yNjIgNjc3LjEzNSAyMzMuOTUxIDY3NC4xMDggMjI1LjA0IDY1OS44MDFDMjIyLjM5MiA2NTUuNTQ4IDIyMy4yOSA2NDkuOTMgMjI4LjM2OSA2NDcuOThDMjM1LjMxNiA2NDUuMzEzIDIzOS43NTQgNjU4LjM0MyAyNDYuMTQ1IDY1OS44MDFDMjUyLjkzOCA2NjEuNzg1IDI1NS4wNDEgNjYwLjk2MiAyNjEuMTQ4IDY1OC42NzhMMjY0LjAwOCA2NTAuMTQ5QzI1NS43MyA2NDEuODY4IDI0OS43MzYgNjM1LjEyMyAyNTUuOTI5IDYyMy4yNDhaIj48L3BhdGg+CiAgPHBhdGggZmlsbD0iIzM4MzgzOCIgZD0iTTE4Mi4wNTUgNTYyLjc0N0MxOTYuOTk2IDU2MC42MzIgMjEwLjggNTcxLjA5NSAyMTIuOCA1ODYuMDUzQzIxNC44MDEgNjAxLjAxIDIwNC4yMzIgNjE0LjczMyAxODkuMjYgNjE2LjYxOUMxNzQuNDQ5IDYxOC40ODQgMTYwLjkwNiA2MDguMDU0IDE1OC45MjcgNTkzLjI1OEMxNTYuOTQ4IDU3OC40NjIgMTY3LjI3NCA1NjQuODM5IDE4Mi4wNTUgNTYyLjc0N1oiPjwvcGF0aD4KICA8cGF0aCBmaWxsPSIjMzgzODM4IiBkPSJNMzczLjYxOCA2MjAuMjM4QzM4OC4xMDcgNjE3LjQ2IDQwMi4xMDggNjI2Ljk0MSA0MDQuOTA2IDY0MS40MjZDNDA3LjcwNCA2NTUuOTExIDM5OC4yNDEgNjY5LjkyNSAzODMuNzYgNjcyLjc0M0MzNjkuMjUxIDY3NS41NjYgMzU1LjIwNSA2NjYuMDgxIDM1Mi40MDIgNjUxLjU2OEMzNDkuNTk4IDYzNy4wNTYgMzU5LjEwMiA2MjMuMDIyIDM3My42MTggNjIwLjIzOFoiPjwvcGF0aD4KICA8cGF0aCBmaWxsPSIjRkNFNEM2IiBkPSJNNTI0Ljg4NyA2NjMuNTlDNTU0LjMzMSA2MjguNDc0IDU5Ni4zNzIgNjA1LjE2NiA2NDAuNDg5IDU5NC4xMTRDNjQ5LjU5NSA1OTEuODMzIDY1OC45NiA1ODkuNTQzIDY2OC4zMjggNTg4LjczOEM2ODAuNzQgNTg3LjY3IDY5Ni4xMzggNTg2LjM2NSA3MDYuNDE1IDU5NC44NjhDNzI0LjIyOCA2MDkuNjA0IDc0MC42NDkgNjc0Ljc3IDc0NS4wNTcgNjk4LjM2NUM3NDcuNjc3IDcxMi4zODggNzQ5LjMxIDcyNi43NzMgNzUwLjM3NSA3NDAuOTkyQzc1MS42MjggNzU3LjcwNyA3NTIuMjM4IDc3NS4xMjEgNzUxLjQzNyA3OTEuODYzQzc0OC43MjMgNzk2LjU1MiA3NDUuNDEzIDgwMy4yNzQgNzQwLjQ1MSA4MDUuNjEyQzczMC4xNCA4MTAuNDY5IDcyMi4yNzUgODAyLjMyNCA3MTcuMDYxIDc5NC40MUM3MTMuMzQ3IDc4OC43NyA3MDkuMzcyIDc4Mi45MTQgNzA1LjM0NCA3NzcuNTlDNjk1LjI1MSA3NjQuMzk0IDY4My40MTkgNzUyLjYyNCA2NzAuMTcxIDc0Mi42QzYzOS44MzkgNzE5LjY4MiA2MDIuOTgzIDcwNy4wNDUgNTY0Ljk3IDcwNi41MjdDNTQ1Ljk3MyA3MDYuMjY5IDUxMi43NSA3MTQuMjkgNTE4LjYyOCA2ODAuNDc3QzUxOS42NDQgNjc0LjYzNiA1MjIuODMxIDY2OS4xNzEgNTI0Ljg4NyA2NjMuNTlaIj48L3BhdGg+CiAgPHBhdGggZmlsbD0iIzM4MzgzOCIgZD0iTTUzMC44IDQyMS42ODdDNTQyLjI3MiA0MjAuMTI3IDU0Ni42MzEgNDMxLjI3MSA1NDYuNDQgNDQwLjY4NkM1NDUuNTY2IDQ4My45NTUgNTI1LjkwNSA1MzkuMjk5IDQ5Ni41MjkgNTcxLjM2NkM0OTQuMjQ0IDU2MS43NTcgNDkxLjc3OSA1NTMuNzIyIDQ4OC41NzYgNTQ0LjM5NkM0ODEuODk0IDUyNS42MzYgNDcyLjIyMSA1MDguMDgxIDQ1OS45MzIgNDkyLjQxMkM0NTUuMjkxIDQ4Ni41NjYgNDQ5LjQzMyA0ODAuMzMxIDQ0NC40NSA0NzQuNTYzQzQ0NC45NDQgNDczLjg0NSA0NDUuNDU0IDQ3My4xMzkgNDQ1Ljk4MiA0NzIuNDQ2QzQ2Mi42MDcgNDUwLjYzNCA1MDMuNjE5IDQyNS4zMjIgNTMwLjggNDIxLjY4N1oiPjwvcGF0aD4KICA8cGF0aCBmaWxsPSIjMzgzODM4IiBkPSJNMjA3LjE2IDMyNC4wODJDMjEyLjM4OCAzMjQuMTEyIDIxNy43MjkgMzI1Ljc5MiAyMjEuMzU5IDMyOS41NTFDMjQwLjQyNiAzNDkuMjk5IDI1My4xMjUgMzg2Ljg3NyAyNTQuNjIgNDEzLjAzOUMyNDkuNTg2IDQxNS43ODMgMjM1LjYwNSA0MTcuNzA4IDIyOC43MzQgNDE5LjYxNEMyMDcuNTA4IDQyNS41MDIgMTkxLjYwNiA0MzIuOTA5IDE3My4xNDUgNDQ0LjU4MUMxNjMuOTQ4IDQ1MC4xMSAxNTQuMDI1IDQ1OC4wNjMgMTQ1LjA5MiA0NjQuNDRDMTQ1LjIxMyA0MjcuOTIzIDE3Mi44MjkgMzQwLjU5NCAyMDcuMTYgMzI0LjA4MloiPjwvcGF0aD4KPC9zdmc+Cg==";

let base64Image = "";

// Handle Image Upload and convert to Base64 (Full Data-URL String)
document.getElementById('avatarInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            // Behält den kompletten String inkl. "data:image/png;base64,..." bei
            base64Image = event.target.result; 
        };
        reader.readAsDataURL(file);
    }
});

// Handle Adding dynamic Social Links
document.getElementById('addSocialBtn').addEventListener('click', function() {
    const container = document.getElementById('socialsContainer');
    
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.gap = '8px';
    div.style.marginBottom = '8px';
    div.className = 'social-row';

    div.innerHTML = `
        <select class="social-type" onchange="toggleCustomLabel(this)" style="padding: 6px; border-radius: 6px; font-family: inherit;">
            <option value="GitHub">GitHub</option>
            <option value="Instagram">Instagram</option>
            <option value="Discord">Discord</option>
            <option value="Website">Website</option>
            <option value="Custom">Custom</option>
        </select>
        <input type="text" class="social-label" placeholder="Name" style="width: 80px; padding: 6px; border-radius: 6px; border: 1px solid rgba(0,0,0,0.2); font-family: inherit; display: none;">
        <input type="url" class="social-url" placeholder="https://..." style="flex: 1; padding: 6px; border-radius: 6px; border: 1px solid rgba(0,0,0,0.2); font-family: inherit;">
        <button type="button" onclick="this.parentElement.remove()" style="background: none; border: none; color: red; cursor: pointer; font-weight: bold;">X</button>
    `;
    container.appendChild(div);
});

function toggleCustomLabel(selectElement) {
    const row = selectElement.parentElement;
    const labelInput = row.querySelector('.social-label');
    if (selectElement.value === 'Custom') {
        labelInput.style.display = 'block';
    } else {
        labelInput.style.display = 'none';
    }
}

// MAIN EXPORT LOGIC
document.getElementById('exportBtn').addEventListener('click', async function() {
    const fullName = document.getElementById('nameInput').value.trim();
    const jobTitle = document.getElementById('jobInput').value.trim();
    const company = document.getElementById('companyInput').value.trim();
    const phone = document.getElementById('phoneInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const note = document.getElementById('noteInput').value.trim();
    const selectedTheme = document.getElementById('themeInput').value;
    const githubPagesUrl = document.getElementById('githubPagesUrlInput').value.trim();

    if (!fullName) {
        alert('Please enter at least a Full Name!');
        return;
    }

// Social Links auslesen
    const socialRows = document.querySelectorAll('.social-row');
    let socialLinksHtml = "";
    let vcardUrls = "";

    // Theme-spezifische Button-Klassen oder Styles definieren
    let btnStyle = "display: block; margin-bottom: 12px; padding: 10px; border-radius: 8px; text-decoration: none; font-weight: bold; text-align: center;";
    if (selectedTheme === 'cream') {
        btnStyle += " background: rgba(0,0,0,0.05); color: #222;";
    } else if (selectedTheme === 'hacker') {
        btnStyle += " background: #111; color: #00ff00; border: 1px solid #00ff00; text-transform: uppercase; font-size: 14px;";
    } else if (selectedTheme === 'corporate') {
        btnStyle += " background: #f0f4f8; color: #0056b3; border: 1px solid #d0e1f9;";
    } else if (selectedTheme === 'sunset') {
        btnStyle += " background: white; color: #ff5e62; box-shadow: 0 2px 4px rgba(0,0,0,0.05);";
    }

    socialRows.forEach(row => {
        let type = row.querySelector('.social-type').value;
        const customLabel = row.querySelector('.social-label').value.trim();
        const url = row.querySelector('.social-url').value.trim();
        
        if (type === 'Custom' && customLabel) {
            type = customLabel;
        }

        if (url) {
            socialLinksHtml += `<a href="${url}" target="_blank" style="${btnStyle}">${type}</a>`;
            vcardUrls += `URL;TYPE=${type}:${url}\r\n`;
        }
    });

    // vCard (VCF) Generierung (Falls ein Bild existiert, extrahieren wir für die VCF das reine Base64)
    let vcardLines = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:${fullName}`,
        `TEL;TYPE=CELL:${phone}`,
        `EMAIL;TYPE=INTERNET:${email}`
    ];

    if (jobTitle) vcardLines.push(`TITLE:${jobTitle}`);
    if (company) vcardLines.push(`ORG:${company}`);
    if (note) vcardLines.push(`NOTE:${note}`);
    
    if (base64Image) {
        const pureBase64 = base64Image.split(',')[1];
        vcardLines.push(`PHOTO;TYPE=JPEG;ENCODING=b:${pureBase64}`);
    }

    let vcardContent = vcardLines.join("\r\n") + "\r\n" + vcardUrls + "END:VCARD";
    const downloadFileName = `${fullName.replace(/\s+/g, '_')}_Contact.vcf`;

    // THEME-ENGINE: Styles basierend auf der Auswahl festlegen
    let themeStyles = {
        body: "background-color: antiquewhite; font-family: 'Playfair Display', Georgia, serif;",
        container: "background-color: rgba(255, 255, 255, 0.5); border: 1px solid rgba(0, 0, 0, 0.1); color: #222;",
        primaryBtn: "background-color: #222; color: antiquewhite;",
        subtitle: "color: #555; font-style: italic;",
        metaText: "font-size: 14px; margin: 4px 0; color: #444;"
    };

    if (selectedTheme === 'hacker') {
        themeStyles = {
            body: "background-color: #0d0d0d; font-family: 'Fira Code', monospace; color: #00ff00;",
            container: "background-color: #1a1a1a; border: 1px solid #00ff00; color: #00ff00; box-shadow: 0 0 10px rgba(0,255,0,0.2);",
            primaryBtn: "background-color: #00ff00; color: #0d0d0d; font-weight: bold; text-transform: uppercase;",
            subtitle: "color: #888; font-family: inherit;",
            metaText: "font-size: 13px; margin: 4px 0; color: #00ff00; opacity: 0.8;"
        };
    } else if (selectedTheme === 'corporate') {
        themeStyles = {
            body: "background-color: #f4f7f6; font-family: 'Inter', sans-serif; color: #333;",
            container: "background-color: #ffffff; border: 1px solid #e1e8ed; color: #333; box-shadow: 0 10px 25px rgba(0,0,0,0.05);",
            primaryBtn: "background-color: #0056b3; color: #ffffff; font-weight: 600;",
            subtitle: "color: #666; font-weight: 500;",
            metaText: "font-size: 14px; margin: 4px 0; color: #555;"
        };
    } else if (selectedTheme === 'sunset') {
        themeStyles = {
            body: "background: linear-gradient(135deg, #ff9966, #ff5e62); font-family: 'Inter', sans-serif; min-height: 100vh; color: #333;",
            container: "background-color: rgba(255, 255, 255, 0.85); border: none; color: #333; backdrop-filter: blur(10px); box-shadow: 0 8px 32px rgba(0,0,0,0.15);",
            primaryBtn: "background: linear-gradient(to right, #ff9966, #ff5e62); color: white; font-weight: 600;",
            subtitle: "color: #777; font-weight: 400; letter-spacing: 0.5px;",
            metaText: "font-size: 14px; margin: 4px 0; color: #555;"
        };
    }

// Job und Company Zeile für HTML aufbereiten, falls vorhanden
    let businessHtml = "";
    if (jobTitle || company) {
        businessHtml = `<div style="margin-bottom: 16px; font-size: 15px;">`;
        if (jobTitle) businessHtml += `<p style="${themeStyles.metaText}; font-weight: bold;">${jobTitle}</p>`;
        if (company) businessHtml += `<p style="${themeStyles.metaText}; opacity: 0.9;">${company}</p>`;
        businessHtml += `</div>`;
    }

    // Notiz-Sektion für HTML aufbereiten, falls vorhanden
    let noteHtml = "";
    if (note) {
        noteHtml = `<p style="margin: 16px 0; font-size: 14px; line-height: 1.5; font-style: italic; opacity: 0.85; border-left: 2px solid; padding-left: 8px; text-align: left;">${note.replace(/\n/g, '<br>')}</p>`;
    }

    // Das fertige HTML-Template zusammenbauen (Mit direktem src-Mapping für base64Image)
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${fullName}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Fira+Code:wght@300..700&family=Inter:wght@300..800&display=swap" rel="stylesheet">
</head>
<body style="${themeStyles.body} margin: 0; padding: 24px; display: flex; flex-direction: column; align-items: center;">

    <div style="${themeStyles.container} padding: 40px; padding-top: 60px; border-radius: 16px; text-align: center; position: relative; max-w-sm w-full; box-shadow: 0 4px 6px rgba(0,0,0,0.05); box-sizing: border-box;">
        
        <img src="${mascotBase64}" alt="Tappy Mascot" style="position: absolute; top: 16px; left: 16px; width: 68px; height: auto;">

        ${base64Image ? `<img src="${base64Image}" style="width: 96px; height: 96px; border-radius: 50%; object-fit: cover; margin-bottom: 16px; border: 2px solid ${selectedTheme === 'hacker' ? '#00ff00' : '#222'};">` : ''}
        
        <h1 style="margin-top: 0; margin-bottom: 4px; font-size: 28px;">${fullName}</h1>
        <p style="margin-top: 0; margin-bottom: 16px; font-size: 14px; ${themeStyles.subtitle}">Contact Profile</p>

        ${businessHtml}
        ${noteHtml}

        <button onclick="downloadVCard()" style="padding: 12px 24px; font-family: inherit; font-size: 16px; cursor: pointer; border: none; border-radius: 8px; width: 100%; margin-bottom: 20px; ${themeStyles.primaryBtn}">
            Save to Contacts
        </button>

        <div style="margin-bottom: 20px;">
            ${socialLinksHtml}
        </div>

        <details style="cursor: pointer; text-align: left; border-top: 1px solid rgba(0, 0, 0, 0.1); padding-top: 16px; font-size: 14px;">
            <summary style="font-weight: bold; font-size: 14px; color: #333; outline: none;">About Maker</summary>
            <p style="margin-top: 8px; margin-bottom: 0; opacity: 0.8; font-size: 13px; line-height: 1.5;">
                Hello Fellow Hackers and Networkers! I am SirYanni, and I made Tappy to help avoid 
                (imo pretty expensive) <br>
                NFC-Businesscard services. To use it, simply click "Create Contact" and enter your info. <br>
                When you're done, simply click "export" and your HTML and vcf file will be downloaded. <br>
                Then, you can just unzip the files and transfer them to your NFC card via your Phone.<br><br>
                <strong>My GitHub:</strong> <a href="https://github.com/siryanni" target="_blank" style="color: inherit; font-weight: bold;">github.com/siryanni</a><br>
                <strong>My Instagram:</strong> <a href="https://www.instagram.com/sir___yanni/" target="_blank" style="color: inherit; font-weight: bold;">@sir___yanni</a>
            </p>
        </details>

        <p style="margin-top: 24px; margin-bottom: 0; font-size: 11px; opacity: 0.6;">Powered by Tappy ⚡</p>
    </div>

    <script>
        function downloadVCard() {
            const vcardData = ${JSON.stringify(vcardContent)};
            const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = ${JSON.stringify(downloadFileName)};
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    <\/script>
</body>
</html>`;

    // ZIP-Generierung vorbereiten
    const zip = new JSZip();
    const fileNameBase = fullName.replace(/\s+/g, '_');
    
    zip.file("index.html", htmlContent);
    zip.file(`${fileNameBase}.vcf`, vcardContent);

    // QR-CODE GENERATOR LOGIK
    if (githubPagesUrl) {
        // Auf dem Bildschirm anzeigen
        const qrContainer = document.getElementById('qrPreviewContainer');
        const qrDiv = document.getElementById('qrcode');
        qrDiv.innerHTML = ""; // Alten QR-Code löschen
        qrContainer.style.display = "flex";

        // QR-Code in verdecktes Element rendern, um DataURL abzugreifen
        const qrObj = new QRCode(qrDiv, {
            text: githubPagesUrl,
            width: 180,
            height: 180,
            correctLevel: QRCode.CorrectLevel.H
        });

        // Kurz warten, bis qrcode.js das Image-Tag im DOM generiert hat
        setTimeout(() => {
            const qrImg = qrDiv.querySelector('img');
            if (qrImg && qrImg.src) {
                const qrBase64 = qrImg.src.split(',')[1];
                zip.file("qrcode.png", qrBase64, {base64: true});
            }
            // ZIP finalisieren und herunterladen
            generateAndDownloadZip(zip, fileNameBase);
        }, 100);
    } else {
        // QR-Vorschau verstecken, falls kein Link eingegeben wurde
        document.getElementById('qrPreviewContainer').style.display = "none";
        generateAndDownloadZip(zip, fileNameBase);
    }
});

function generateAndDownloadZip(zip, fileNameBase) {
    zip.generateAsync({type:"blob"}).then(function(content) {
        const url = URL.createObjectURL(content);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Tappy_${fileNameBase}.zip`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}