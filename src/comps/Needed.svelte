<svelte:options accessors={true} />

<script>
	export let neededVar, neededQuality;
	import { checkboxGold, checkboxPurple, checkboxBlue, checkboxGreen, checkboxWhite } from './Forms.svelte';
	import { afterUpdate, onMount } from 'svelte';


	let options = [];

	$: {
		checkboxGold;
		checkboxPurple;
		checkboxBlue;
		checkboxGreen;
		checkboxWhite;

		options = [
			...(checkboxGold ? [] : ['Gold']),
			...(checkboxPurple ? [] : ['Purple']),
			...(checkboxGold ? [] : ['Blue']),
			...(checkboxGold ? [] : ['Green']),
			...(checkboxGold ? [] : ['White'])
		];
	}
</script>

<main>
	<div class='additional-layer'>
		<div class='wrapper wrapper-main'>
			<div class='wrapper wrapper-needed'>
				<label class='label-needed' for='needed'>I need:</label>
				<input id='needed' type='number' placeholder='0' bind:value={neededVar}>
			</div>
			<div class='wrapper wrapper-quality'>
				<label class='label-quality' for='quality'>of</label>
				<select bind:value={neededQuality} name='quality' id='quality'>
					{#each options as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
				<label class='label-quality' for='quality'>Quality</label>
			</div>
		</div>
	</div>

</main>

<style lang='postcss'>
    main {
        color: antiquewhite;
        background-color: rgba(15, 72, 128, 0.9);
        border-radius: 10px;
        box-shadow: 0 0 25px 15px rgba(0, 0, 0, 0.6);
        margin: 35px;
    }

    .additional-layer {
        position: relative;
        top: 10px;
        border-radius: 10px;
        padding: 35px;
        background-color: rgba(22, 106, 189, 0.7);
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        margin: 5px;

        &-needed {
            flex-grow: 1;
        }

        &-quality {
            flex-grow: 2;
        }
    }

    label {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 10px;
    }

    input, select {
        width: 50px;
        height: 36px;
        margin: 10px;
    }

    input {
        margin-left: 35%;
    }

    #quality {
        width: 150px;
    }
</style>