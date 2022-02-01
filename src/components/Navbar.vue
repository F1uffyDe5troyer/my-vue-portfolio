<template>
    <!-- Sticky navbar-->
<header class="header sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container"><a class="navbar-brand" href="#">
            <strong class="h6 mb-0 font-weight-bold text-uppercase">Sticky navbar</strong></a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
                    <li class="nav-item"><a class="nav-link disabled" href="#">Disabled</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>

<script>
</script>

<style scoped>
    .text-small {
    font-size: 0.9rem !important;
}

.header {
    background-color: #00d2ff;
    background-image: linear-gradient(to right, #00d2ff 0%, #3a7bd5 100%);
}

.section-1 {
    background: #f5f5f5;
}

.section-2 {
    background: #F1F1F1;
}

.section-3 {
    background: #EAEAEA;
}

.section-4 {
    background: #E5E5E5;
}
</style>