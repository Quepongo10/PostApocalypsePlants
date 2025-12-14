<script setup>
import { computed} from 'vue';

const props = defineProps({
    title: String,
    content: String,
    bot: {
        type: Number,
        default: 0,
    },
    left: {
        type: Number,
        default: 0,
    },
});

const popupStyle = computed(() => {
    const baseWidth = 200;
    const extraWidth = (props.title?.length || 0) * 16;
    const extraHeight = (props.content?.length || 0) * 1;
    const baseHeight = 150;
    return {
        width: `${baseWidth + extraWidth}px`,
        height: `${baseHeight + extraHeight}px`,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        border: '2px solid rgba(255, 255, 255, 0.4)',
        margin: '10px',
        padding: '0px',
        bottom: `${props.bot}px`,
        left: `${props.left}px`,
        backdropFilter: 'blur(5px)',
    };
});
</script>

<template>
    <div class="popup" :style="popupStyle">
        <div id="deco">
            <div id="red"></div>
            <div id="yellow"></div>
        </div>
        <h1>{{ props.title }}</h1>
        <p>{{ props.content }}</p>
    </div>
</template>

<style scoped>
.popup {
    cursor: pointer;
    z-index: 5;
}

h1 {
    font-size: 20px;
    margin-top: 15px;
    color: white;
}

p {
    font-size: 16px;
    margin: 0px 5px 0px 5px;
    color: white;
}

#deco {
    width: 100%;
    height: 15px;
    background-color: rgb(0, 0, 0);
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
}

#yellow {
    width: 13px;
    height: 13px;
    border-radius: 100%;
    background-color: rgb(240, 240, 0);
    float: right;
    margin: 1px 5px 1px 1px;
}

#red {
    width: 13px;
    height: 13px;
    border-radius: 100%;
    background-color: rgb(196, 0, 0);
    float: right;
    margin: 1px 5px 1px 1px
}

</style>