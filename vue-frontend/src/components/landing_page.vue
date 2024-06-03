<template>
  <div class="mainWindow">
    <nav>
        <div class="nav-logo">
            <a href="#">
                <img src="../assets/ship.png">
            </a>
        </div>

        <ul class="nav-links">
            <li id="link2" class="link"><a href="#">About Group</a></li>
            <li id="link3" class="link"><a href="#">Links</a></li>
        </ul>
        <router-link to="/basics"><button class="btn">Learn Basics</button></router-link>
    </nav>

    <header class="container">
        <div class="content">
            <span class="blur"></span>
            <span class="blur"></span>
            <h4>Survive Better</h4>
            <H1>Get Survival<span> Predictions </span></H1>
            <p>
              using the power of Machine Learning Models

            </p>
            <router-link to="/predict"><button class="btn">Prediction Calculator</button></router-link>
        </div>
        <div class="image">
            <img src="../assets/header.png">
        </div>
    </header>

    <footer>

    </footer>
    
  </div>  
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>


  