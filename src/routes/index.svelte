<script>
	import Needed from '../comps/Needed.svelte';
	import Forms from '../comps/Forms.svelte';

	let neededComp, neededResult, haveComp, dropComp;

	const calculateDomain = () => {
		haveComp.amountGold = dropComp.checkboxGold || dropComp.amountGold === undefined ? haveComp.amountGold : haveComp.amountGold + dropComp.amountGold;
		haveComp.amountPurple = dropComp.checkboxPurple || dropComp.amountPurple === undefined ? haveComp.amountPurple : haveComp.amountPurple + dropComp.amountPurple;
		haveComp.amountBlue = dropComp.checkboxBlue || dropComp.amountBlue === undefined ? haveComp.amountBlue : haveComp.amountBlue + dropComp.amountBlue;
		haveComp.amountGreen = dropComp.checkboxGreen || dropComp.amountGreen === undefined ? haveComp.amountGreen : haveComp.amountGreen + dropComp.amountGreen;
		haveComp.amountWhite = dropComp.checkboxWhite || dropComp.amountWhite === undefined ? haveComp.amountWhite : haveComp.amountWhite + dropComp.amountWhite;

		dropComp.amountGold = dropComp.checkboxGold || dropComp.amountGold === undefined ? dropComp.amountGold : 0;
		dropComp.amountPurple = dropComp.checkboxPurple || dropComp.amountPurple === undefined ? dropComp.amountPurple : 0;
		dropComp.amountBlue = dropComp.checkboxBlue || dropComp.amountBlue === undefined ? dropComp.amountBlue : 0;
		dropComp.amountGreen = dropComp.checkboxGreen || dropComp.amountGreen === undefined ? dropComp.amountGreen : 0;
		dropComp.amountWhite = dropComp.checkboxWhite || dropComp.amountWhite === undefined ? dropComp.amountWhite : 0;
	};

	const calculateNeed = (quality) => {
		let _gold = haveComp.checkboxGold || haveComp.amountGold === undefined ? neededComp.neededVar : neededComp.neededVar - haveComp.amountGold;
		let _purple = haveComp.checkboxPurple || haveComp.amountPurple === undefined ? _gold : _gold * 3 - haveComp.amountPurple;
		let _blue = haveComp.checkboxBlue || haveComp.amountBlue === undefined ? _purple : _purple * 3 - haveComp.amountBlue;
		let _green = haveComp.checkboxGreen || haveComp.amountGreen === undefined ? _blue : _blue * 3 - haveComp.amountGreen;
		let _white = haveComp.checkboxWhite || haveComp.amountWhite === undefined ? _green : _green * 3 - haveComp.amountWhite;
		switch (quality) {
			case 'Gold':
				return _white;
			case 'Purple':
				return _green;
			case 'Blue':
				return _blue;
			case 'Green':
				return _purple;
			case 'White':
				return _gold;
			default:
				'I break';
		}
	};

	const renderNeeded = () => {
		calculateDomain();
		neededResult.innerText =
			calculateNeed(neededComp.neededQuality) === undefined
				?
				'Error!'
				:
				'You need ' + calculateNeed(neededComp.neededQuality) + ' resources of lowest quality';
	};
</script>

<main>
	<div class='wrapper'>
		<Needed bind:this={neededComp} />
		<div class='common wrapper-have'>
			<h3 class='title-have'>You have:</h3>
			<Forms class='forms' bind:this={haveComp} />
		</div>
		<div class='common wrapper-have'>
			<h3 class='title-drop'>Last drop:</h3>
			<Forms class='forms' bind:this={dropComp} />
		</div>
		<div class='wrapper-result'>
			<button class='common result' on:click={renderNeeded}>
				Calculate
			</button>
			<p class='common result' bind:this={neededResult}>Press Calculate to start!</p>
		</div>
	</div>
</main>

<style lang='postcss'>
		@font-face {
				font-family: genshin-font;
				src: url("zh-cn.ttf");
    }

    :global(body) {
        background-image: url("./img/Site-background-dark.webp");
        background-size: auto 100vh;
        background-position: center 0;
        color: antiquewhite;
				font-family: genshin-font;
    }

    :global(input, button, select, textarea) {
        font-family: inherit;
        font-size: inherit;
        padding: 0.4em;
        margin: 0 0 0.5em 0;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 2px;
    }

    main {
        text-align: center;
        margin: 0 auto;
        padding: 20px;
    }

    .common {
        border-radius: 10px;
        color: inherit;
        box-shadow: 0 0 25px 15px rgba(0, 0, 0, 0.6);
        background-color: rgba(15, 72, 128, 0.9);
    }

    .result {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 90px;
        position: relative;
        margin: 15px;
        background-color: rgba(15, 72, 128, 0.9);
    }

    button {
        position: relative;
        font-size: 1.5rem;
        transition: background-color 250ms, color 250ms;

        &:hover {
            background-color: antiquewhite;
            color: rgba(15, 72, 128, 0.9)
        }
    }

    .wrapper {
        display: flex;
        flex-direction: row;
        margin: 20px;
        padding: 1em;

        &-result {
            display: flex;
            flex-direction: column;
            margin-top: 8%;
            justify-content: center;
            align-items: center;
        }

        &-have {
            margin: 35px;
        }
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>