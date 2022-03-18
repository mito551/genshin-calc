<svelte:options accessors={true} />

<script context='module'>
	export let
		checkboxGold = false,
		checkboxPurple = false,
		checkboxBlue = false,
		checkboxGreen = false,
		checkboxWhite = false,
		amountGold,
		amountPurple,
		amountBlue,
		amountGreen,
		amountWhite;
</script>

<script>
	export let
		checkboxGold = false,
		checkboxPurple = false,
		checkboxBlue = false,
		checkboxGreen = false,
		checkboxWhite = false,
		amountGold,
		amountPurple,
		amountBlue,
		amountGreen,
		amountWhite;
</script>

<main>
	<div class='formWrapper'>
		<label class='grid-color-label' for='gold'>Gold:</label>
		<input class='grid-color-input' disabled={checkboxGold} id='gold' type='number' placeholder='1'
					 bind:value={amountGold}>
		<label class='grid-checkbox-label' for='checkboxGold'>Disable</label>
		<input class='grid-checkbox' type='checkbox' id='checkboxGold' bind:checked={checkboxGold}>
	</div>

	<div class='formWrapper'>
		<label class='grid-color-label' for='purple'>Purple:</label>
		<input class='grid-color-input' disabled={checkboxPurple} id='purple' type='number' placeholder='1'
					 bind:value={amountPurple}>
		<input class='grid-checkbox' type='checkbox' bind:checked={checkboxPurple}>
	</div>

	<div class='formWrapper'>
		<label class='grid-color-label' for='blue'>Blue:</label>
		<input class='grid-color-input' disabled={checkboxBlue} id='blue' type='number' placeholder='1'
					 bind:value={amountBlue}>
		<input class='grid-checkbox' type='checkbox' bind:checked={checkboxBlue}>
	</div>

	<div class='formWrapper'>
		<label class='grid-color-label' for='green'>Green:</label>
		<input class='grid-color-input' disabled={checkboxGreen} id='green' type='number' placeholder='1'
					 bind:value={amountGreen}>
		<input class='grid-checkbox' type='checkbox' bind:checked={checkboxGreen}>
	</div>

	<div class='formWrapper'>
		<label class='grid-color-label' for='white'>White:</label>
		<input class='grid-color-input' disabled={checkboxWhite} id='white' type='number' placeholder='1'
					 bind:value={amountWhite}>
		<input class='grid-checkbox' type='checkbox' bind:checked={checkboxWhite}>
	</div>
</main>

<style lang='postcss'>
    main {
        background-color: rgba(22, 106, 189, 0.7);
        border-radius: 10px;
        padding: 20px;
        color: antiquewhite;
        position: relative;
        bottom: 7px;
    }

    input {
        width: 75px;
    }

    .formWrapper {
        display: grid;
        grid-gap: 10px;
        grid-auto-flow: row;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr min-content;
        text-align: left;
    }

    .grid {
        &-color {
            &-label {
                grid-column-start: 1;
                grid-row-start: 2;
            }

            &-input {
                grid-column-start: 2;
                grid-row-start: 2;
            }
        }

        &-checkbox {
            grid-column-start: 3;
            grid-row-start: 2;

            &-label {
                grid-column-start: 3;
                grid-row-start: 1;
                text-align: center;
            }
        }
    }
</style>