window.onload = function(){
  // Get the modal
  var modal = document.getElementById('deleteModal');
  // User vote modal
  var voteModal = document.getElementById('voteModal');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // var voteCloseSpan = document.getElementsByClassName("closeVote")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  voteCloseSpan.onclick = function() {
    voteModal.style.display = 'none';
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
  }
  
  
}
var showModal = function(){
  modal.style.display = "block";
}
var hideModal = function(){
  modal.style.display = "none";
}

// User vote
var selectCandidate = function(){
  voteModal.style.display = "block";
}
var hideVoteModal = function(){
  voteModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var userSignup = function(e){
  e.preventDefault();
  window.location.href = 'userLogin.html';
  console.log(window.location.href)
}
}