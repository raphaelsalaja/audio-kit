import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TrueTone({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M9 4C6.23858 4 4 6.23858 4 9H14C14 6.23858 11.7614 4 9 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 0.5C9.41421 0.5 9.75 0.835786 9.75 1.25V2.25C9.75 2.66421 9.41421 3 9 3C8.58579 3 8.25 2.66421 8.25 2.25V1.25C8.25 0.835786 8.58579 0.5 9 0.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.0103 2.98966C15.3032 3.28255 15.3032 3.75743 15.0103 4.05032L14.3033 4.75733C14.0105 5.05023 13.5356 5.05023 13.2427 4.75734C12.9498 4.46445 12.9498 3.98958 13.2427 3.69668L13.9497 2.98967C14.2426 2.69678 14.7174 2.69677 15.0103 2.98966Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15 9C15 8.58579 15.3358 8.25 15.75 8.25H16.75C17.1642 8.25 17.5 8.58579 17.5 9C17.5 9.41421 17.1642 9.75 16.75 9.75H15.75C15.3358 9.75 15 9.41421 15 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.2427 13.2427C13.5356 12.9498 14.0104 12.9498 14.3033 13.2427L15.0103 13.9497C15.3032 14.2426 15.3032 14.7174 15.0103 15.0103C14.7174 15.3032 14.2426 15.3032 13.9497 15.0103L13.2427 14.3033C12.9498 14.0104 12.9498 13.5356 13.2427 13.2427Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 15C9.41421 15 9.75 15.3358 9.75 15.75V16.75C9.75 17.1642 9.41421 17.5 9 17.5C8.58579 17.5 8.25 17.1642 8.25 16.75V15.75C8.25 15.3358 8.58579 15 9 15Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.75732 13.2427C5.05021 13.5356 5.05021 14.0104 4.75732 14.3033L4.05032 15.0103C3.75743 15.3032 3.28255 15.3032 2.98966 15.0103C2.69677 14.7174 2.69677 14.2426 2.98966 13.9497L3.69666 13.2427C3.98955 12.9498 4.46443 12.9498 4.75732 13.2427Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0.5 9C0.5 8.58579 0.835786 8.25 1.25 8.25H2.25C2.66421 8.25 3 8.58579 3 9C3 9.41421 2.66421 9.75 2.25 9.75H1.25C0.835786 9.75 0.5 9.41421 0.5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.98966 2.98966C3.28256 2.69677 3.75743 2.69677 4.05032 2.98967L4.75732 3.69668C5.05021 3.98958 5.05021 4.46445 4.75732 4.75734C4.46442 5.05023 3.98955 5.05023 3.69666 4.75733L2.98966 4.05032C2.69676 3.75743 2.69677 3.28255 2.98966 2.98966Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 14C11.7614 14 14 11.7614 14 9H4C4 11.7614 6.23858 14 9 14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TrueTone;
