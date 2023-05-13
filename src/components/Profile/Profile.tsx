import Image from 'next/image'
import React from 'react'
import { Spacer } from '../Util/Spacer'

const Profile = () => {
  return (
    <div className='flex'>
      <div className='rounded-full'>
        <Image
          src={'/icon_me.png'}
          height={96}
          width={96}
          alt='icon_me'
        />
      </div>
      <Spacer size={8} />
      <div>
        <div className='flex'>
          <span>たん</span>
          <Image
          src='/icon_github.png'
          height={24}
          width={24}
          alt='icon_github'
          />
          <Image
          src='/icon_twitter.png'
          height={24}
          width={24}
          alt='icon_twitter'
          />
        </div>
        <p>Typescript / Next.js / golangなど</p>
      </div>
    </div>
  )
}

export default Profile