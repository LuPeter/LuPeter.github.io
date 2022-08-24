import React from 'react'
import Layout from '@theme/Layout'

export default function Hello() {
	return (
		<Layout title="Hello" description="Hello React Page">
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '50vh',
					fontSize: '20px',
				}}
			>
				<p>
					修改 <code>pages/helloReact.js</code>，然後保存，頁面就會重載
				</p>
			</div>
		</Layout>
	)
}
