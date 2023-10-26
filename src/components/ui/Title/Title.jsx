import './Title.module.css'

export const Title = ({title1,title2}) => {
  return (
<section className='relative mb-24 lg:mb-28 text-center w-full button'>
	<h1 className="text-white text-[30px] lg:text-[70px] text-opacity-10 font-[800]">{title1}</h1>
	<div className="absolute -bottom-5 w-full">
		<p className="text-[#4D4D4D] text-[30px] lg:text-6xl font-[800] btn-shine" target="_blank"><small>{title2}</small></p>
	</div>
</section>
  )
}
