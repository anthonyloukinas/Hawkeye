/**
 * clusters/create.js
 * Handles cluster creation on the frontend
 *
 * @author Anthony Loukinas <anthony.loukinas@redhat.com>
 */

/**
 * Create Cluster Form Submission Logic
 */
$( "#create-cluster-form" ).on('submit', function(event){
    event.preventDefault(); // prevent form submit action

    let data = $( "#create-cluster-form" ).serializeArray(); // create an array of objects { name: value }
    let jsonData = {}; // initialize an empty object

    // implode array of objects, and unify to single object
    data.map(element => {
        const { name, value } = element;
        jsonData[name] = value;
    });

    // submit request to api
    $.ajax({
        url: '/clusters/create',
        method: 'POST',
        data: jsonData,
        success: function(results){
            alert("Cluster has been successfully created");
        },
        failed: function(error){
            alert("Unable to create cluster");
        }
    });
});