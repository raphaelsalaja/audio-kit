import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Vault4({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H13.75C15.2687 16 16.5 14.7693 16.5 13.25V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.75 13C12.1642 13 12.5 12.664 12.5 12.25C12.5 11.836 12.1642 11.5 11.75 11.5C11.3358 11.5 11 11.836 11 12.25C11 12.664 11.3358 13 11.75 13Z"
          fill={fill}
        />
        <path
          d="M9.25 13C9.6642 13 10 12.664 10 12.25C10 11.836 9.6642 11.5 9.25 11.5C8.8358 11.5 8.5 11.836 8.5 12.25C8.5 12.664 8.8358 13 9.25 13Z"
          fill={fill}
        />
        <path
          d="M11.75 10.5C12.1642 10.5 12.5 10.164 12.5 9.75C12.5 9.336 12.1642 9 11.75 9C11.3358 9 11 9.336 11 9.75C11 10.164 11.3358 10.5 11.75 10.5Z"
          fill={fill}
        />
        <path
          d="M9.25 10.5C9.6642 10.5 10 10.164 10 9.75C10 9.336 9.6642 9 9.25 9C8.8358 9 8.5 9.336 8.5 9.75C8.5 10.164 8.8358 10.5 9.25 10.5Z"
          fill={fill}
        />
        <path
          d="M0.5 9C0.5 8.58579 0.835786 8.25 1.25 8.25H3.25C3.66421 8.25 4 8.58579 4 9C4 9.41421 3.66421 9.75 3.25 9.75H1.25C0.835786 9.75 0.5 9.41421 0.5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0.5 5.75C0.5 5.33579 0.835786 5 1.25 5H3.25C3.66421 5 4 5.33579 4 5.75C4 6.16421 3.66421 6.5 3.25 6.5H1.25C0.835786 6.5 0.5 6.16421 0.5 5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0.5 12.25C0.5 11.8358 0.835786 11.5 1.25 11.5H3.25C3.66421 11.5 4 11.8358 4 12.25C4 12.6642 3.66421 13 3.25 13H1.25C0.835786 13 0.5 12.6642 0.5 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.5 5.75C7.5 5.33579 7.83579 5 8.25 5H12.75C13.1642 5 13.5 5.33579 13.5 5.75V7.25C13.5 7.66421 13.1642 8 12.75 8H8.25C7.83579 8 7.5 7.66421 7.5 7.25V5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 15.9888C4.08234 15.9962 4.16573 16 4.25 16H5.5V17C5.5 17.4142 5.16421 17.75 4.75 17.75C4.33579 17.75 4 17.4142 4 17V15.9888Z"
          fill={fill}
        />
        <path
          d="M12.5 16H13.75C13.8343 16 13.9177 15.9962 14 15.9888V17C14 17.4142 13.6642 17.75 13.25 17.75C12.8358 17.75 12.5 17.4142 12.5 17V16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Vault4;
