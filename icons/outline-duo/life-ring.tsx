import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LifeRing({
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
          d="M10.311 5.487L11.71 1.738C10.866 1.423 9.95302 1.251 8.99902 1.251C8.04502 1.251 7.13202 1.423 6.28802 1.738L7.68702 5.487C8.09602 5.334 8.53602 5.251 8.99802 5.251C9.46002 5.251 9.90102 5.335 10.309 5.488L10.311 5.487Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.513 10.311L16.262 11.71C16.577 10.866 16.749 9.953 16.749 9C16.749 8.046 16.577 7.133 16.262 6.289L12.513 7.688C12.666 8.097 12.749 8.537 12.749 8.999C12.749 9.461 12.665 9.902 12.512 10.31L12.513 10.311Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.68898 12.513L6.28998 16.262C7.13398 16.577 8.04698 16.749 9.00098 16.749C9.95498 16.749 10.868 16.577 11.712 16.262L10.313 12.513C9.90398 12.666 9.46398 12.749 9.00198 12.749C8.53998 12.749 8.09898 12.665 7.69098 12.512L7.68898 12.513Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.48698 7.689L1.73798 6.29C1.42298 7.134 1.25098 8.047 1.25098 9C1.25098 9.954 1.42298 10.867 1.73798 11.711L5.48698 10.312C5.33398 9.903 5.25098 9.463 5.25098 9.001C5.25098 8.539 5.33498 8.098 5.48798 7.69L5.48698 7.689Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.48602 7.688C5.86502 6.672 6.67302 5.865 7.68902 5.485"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.312 5.486C11.328 5.865 12.135 6.673 12.515 7.689"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.514 10.312C12.135 11.328 11.327 12.135 10.311 12.515"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.68799 12.514C6.67199 12.135 5.86499 11.327 5.48499 10.311"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.46402 15.794C4.50002 15.061 2.93902 13.5 2.20502 11.535"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.794 11.536C15.061 13.5 13.499 15.061 11.535 15.795"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.536 2.206C13.5 2.939 15.061 4.501 15.795 6.465"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.20599 6.464C2.93899 4.5 4.49999 2.939 6.46499 2.205"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.311 5.487L11.71 1.738C10.866 1.423 9.95302 1.251 8.99902 1.251C8.04502 1.251 7.13202 1.423 6.28802 1.738L7.68702 5.487C8.09602 5.334 8.53602 5.251 8.99802 5.251C9.46002 5.251 9.90102 5.335 10.309 5.488L10.311 5.487Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.513 10.311L16.262 11.71C16.577 10.866 16.749 9.953 16.749 9C16.749 8.046 16.577 7.133 16.262 6.289L12.513 7.688C12.666 8.097 12.749 8.537 12.749 8.999C12.749 9.461 12.665 9.902 12.512 10.31L12.513 10.311Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.68898 12.513L6.28998 16.262C7.13398 16.577 8.04698 16.749 9.00098 16.749C9.95498 16.749 10.868 16.577 11.712 16.262L10.313 12.513C9.90398 12.666 9.46398 12.749 9.00198 12.749C8.53998 12.749 8.09898 12.665 7.69098 12.512L7.68898 12.513Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.48698 7.689L1.73798 6.29C1.42298 7.134 1.25098 8.047 1.25098 9C1.25098 9.954 1.42298 10.867 1.73798 11.711L5.48698 10.312C5.33398 9.903 5.25098 9.463 5.25098 9.001C5.25098 8.539 5.33498 8.098 5.48798 7.69L5.48698 7.689Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default LifeRing;
