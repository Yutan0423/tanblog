import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Spacer } from '../Util/Spacer'

const Profile = () => {
  return (
    <div className="flex justify-start items-center border-t-2 px-8 pt-10 py-16 w-full">
      <Image
        src="/icon_me.png"
        alt="icon_me"
        className="rounded-full"
        height={80}
        width={80}
      />
      <Spacer size={8} />
      <div>
        <div className="flex items-center">
          <span>たん</span>
          <Spacer size={4} />
          <Link href="https://github.com/Yutan0423">
            <Image
              src="/icon_github.png"
              height={24}
              width={24}
              alt="icon_github"
            />
          </Link>
          <Spacer size={3} />
          <Link href="https://twitter.com/hametsuno">
            <Image
              src="/icon_twitter.png"
              height={24}
              width={24}
              alt="icon_twitter"
            />
          </Link>
        </div>
        <Spacer size={3} />
        <p>Web開発が好き</p>
        <p>Typescript / Next.js / golangなど</p>
      </div>
    </div>
  )
}

export default Profile
