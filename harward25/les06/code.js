document.addEventListener('DOMContentLoaded', () => {

    async function loaddata() {
        const [users, autos, owners] = await promise.all([
            fetch('data/users/json').then(res => res.JSON()),
            fetch('data/autos/json').then(res => res.JSON()),
            fetch('data/owners/json').then(res => res.JSON())
        ])
        return {users, autos, owners}
    }
    function renderOwnersTable(){
        const tbody = document.querySelector('#owners-table,tbody')
        tbody.innerHTML = users.map(user => `
            <tr>
                <td>${user.id}</td>
                <td>${user.secondname}</td>
                <td>${user.name}</td>
                <td>${user.phone}</td>
                <td>${user.gmail}</td>
                <td>${user.town}</td>
            </tr>
            `).join('')
        } 
        function renderAutosTable(){
            const tbody = document.querySelector('#autos-table,tbody')
            tbody.innerHTML = autos.map(user => `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.mark}</td>
                    <td>${user.model}</td>
                    <td>${user.color}</td>
                    <td>${user.gosnum}</td>
                </tr>
                `).join('')
            } 
        function renderOwnersSelect(params) {
            
        }
})