<template>
    <div class="review">
        <div class="avatar">
            <img :src="review.avatar" >
        </div>
        <div class="text">
            <a class="username" href="#">{{ review.user }}</a> <span>{{ review.text }}</span>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'SingleReview',
        props: ['review']
    }
</script>

<style scoped>
/* Single-review component */
.review {
    display: flex;
    padding: 10px;
    margin-bottom: 10px;
    align-items: center;
    color: #333;
    background-color: #F2F2F2;
    border-radius: 30px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}
.review .avatar {
    align-self: flex-start;
}
.review .avatar > img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    align-self: start;
}
.review .text {
    text-align: left;
    margin-left: 5px;
}
.review .text span {
    margin-left: 5px;
}
.review .text .username {
    font-weight: bold;
    color: #333;
}
</style>