import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hashtag({
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
          d="M3 6.25C3 5.83579 3.33579 5.5 3.75 5.5H15.25C15.6642 5.5 16 5.83579 16 6.25C16 6.66421 15.6642 7 15.25 7H3.75C3.33579 7 3 6.66421 3 6.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 11.75C2 11.3358 2.33579 11 2.75 11H14.25C14.6642 11 15 11.3358 15 11.75C15 12.1642 14.6642 12.5 14.25 12.5H2.75C2.33579 12.5 2 12.1642 2 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7.77124 2.01286C8.17836 2.0892 8.44651 2.48113 8.37017 2.88824L6.02617 15.3882C5.94982 15.7954 5.5579 16.0635 5.15078 15.9872C4.74367 15.9108 4.47552 15.5189 4.55186 15.1118L6.89586 2.61178C6.97221 2.20466 7.36413 1.93652 7.77124 2.01286Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.8492 2.01286C13.2564 2.0892 13.5245 2.48113 13.4482 2.88824L11.1042 15.3882C11.0278 15.7954 10.6359 16.0635 10.2288 15.9872C9.82167 15.9108 9.55352 15.5189 9.62987 15.1118L11.9739 2.61178C12.0502 2.20466 12.4421 1.93652 12.8492 2.01286Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Hashtag;
