import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Award({
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
          d="M9.64299 12.133L10.42 11.481C10.6 11.33 10.828 11.247 11.063 11.247H12.077C12.562 11.247 12.978 10.899 13.062 10.421L13.238 9.422C13.279 9.19 13.4 8.981 13.58 8.83L14.357 8.178C14.729 7.866 14.823 7.332 14.58 6.912L14.073 6.033C13.955 5.829 13.913 5.591 13.954 5.359L14.13 4.36C14.214 3.882 13.943 3.413 13.487 3.247L12.534 2.9C12.313 2.82 12.128 2.664 12.01 2.46L11.503 1.581C11.26 1.161 10.751 0.975002 10.295 1.141L9.342 1.488C9.121 1.568 8.87899 1.568 8.65799 1.488L7.705 1.141C7.249 0.975002 6.74 1.16 6.497 1.581L5.98999 2.46C5.87199 2.664 5.687 2.819 5.466 2.9L4.513 3.247C4.057 3.413 3.786 3.882 3.87 4.36L4.04599 5.359C4.08699 5.591 4.045 5.829 3.927 6.033L3.41999 6.912C3.17699 7.332 3.27099 7.866 3.64299 8.178L4.41999 8.83C4.59999 8.981 4.721 9.191 4.762 9.422L4.938 10.421C5.022 10.899 5.43799 11.247 5.92299 11.247H6.93699C7.17199 11.247 7.4 11.33 7.58 11.481L8.357 12.133C8.729 12.445 9.27099 12.445 9.64299 12.133Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 14.2431V17.25L9 14.75L5.75 17.25V14.2431"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8.724C10.105 8.724 11 7.8286 11 6.724C11 5.6194 10.105 4.724 9 4.724C7.895 4.724 7 5.6194 7 6.724C7 7.8286 7.895 8.724 9 8.724Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Award;
