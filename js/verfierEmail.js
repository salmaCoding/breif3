fetch('../database.json')
    .then(response => response.json())
    .then(data => {
        var subscription = data.subscriptions;
       console.log(subscription)
        document.getElementById('buttonSend').addEventListener('click', function() {
            var email = document.getElementById('email').value; 

            if (subscription.includes(email)) {
                    alert('Now You can now read All Magazines Enjoy ');
                    localStorage.setItem("user",'allow');
                    closePopUp();

            } else {
                alert('Plaese Subscribe to read Magazines');
            }
        });
    })
    .catch(error => console.error('Error loading verified emails:', error));
