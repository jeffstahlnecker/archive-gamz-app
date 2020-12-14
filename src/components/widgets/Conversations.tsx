import React from 'react'
import ConversationsList from '../../mock/ConversationsList'
import { IconCalendar, IconRight } from '../Icons'
import { priorities } from '../constants/StatusCodes'
import Tag from '../globals/Tag'

const Conversations: React.FC = () => {
  return (
    <div className="mt-10">
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Open Conversations
          </h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {ConversationsList.map((conversation) => {
            return (
              <li>
                <a href="/" className="block hover:bg-gray-50">
                  <div className="px-4 py-4 flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                      <div>
                        <div className="flex text-sm font-medium text-indigo-600 truncate">
                          <p>{conversation.subject}</p>
                        </div>
                        <div className="mt-2 flex">
                          <div className="flex items-center text-sm text-gray-500">
                            <IconCalendar />
                            <p>
                              <time dateTime={conversation.startDate}>
                                {conversation.startDate}
                              </time>
                            </p>
                          </div>
                          <div>{priorities[conversation.priority]}</div>
                          <div>
                            {conversation.tags.map((tag) => (
                              <Tag tag={tag} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex-shrink-0 sm:mt-0">
                        <div className="flex overflow-hidden">
                          <img
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src={conversation.userImage}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ml-5 flex-shrink-0">
                      <IconRight />
                    </div>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Conversations
