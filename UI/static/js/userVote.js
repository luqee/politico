window.onload = function(){
    // User vote modal
    var voteModal = document.getElementById('voteModal');
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        voteModal.style.display = "none";
    }
}
  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == voteModal) {
        voteModal.style.display = 'none';
    }
}
// User vote
var selectCandidate = function(){
    voteModal.style.display = "block";
}
var hideVoteModal = function(){
    voteModal.style.display = "none";
}
var castVote = function(){
    window.location.href = 'viewOffices.html';
}