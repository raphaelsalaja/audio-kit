import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Vault2({
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
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V5H1.25C0.835786 5 0.5 5.33579 0.5 5.75C0.5 6.16421 0.835786 6.5 1.25 6.5H1.5V8.25H1.25C0.835786 8.25 0.5 8.58579 0.5 9C0.5 9.41421 0.835786 9.75 1.25 9.75H1.5V11.5H1.25C0.835786 11.5 0.5 11.8358 0.5 12.25C0.5 12.6642 0.835786 13 1.25 13H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H13.75C15.2692 16 16.5 14.7692 16.5 13.25V4.75C16.5 3.23079 15.2692 2 13.75 2H4.25ZM6 9C6 7.34321 7.34306 6 9 6C10.6569 6 12 7.34321 12 9C12 10.6568 10.6569 12 9 12C7.34306 12 6 10.6568 6 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 15.9888C4.08234 15.9962 4.16573 16 4.25 16H5.5V17C5.5 17.4142 5.16421 17.75 4.75 17.75C4.33579 17.75 4 17.4142 4 17V15.9888Z"
          fill={secondaryfill}
        />
        <path
          d="M12.5 16H13.75C13.8343 16 13.9177 15.9962 14 15.9888V17C14 17.4142 13.6642 17.75 13.25 17.75C12.8358 17.75 12.5 17.4142 12.5 17V16Z"
          fill={secondaryfill}
        />
        <path
          d="M9 10.5C9.82848 10.5 10.5 9.828 10.5 9C10.5 8.172 9.82848 7.5 9 7.5C8.17152 7.5 7.5 8.172 7.5 9C7.5 9.828 8.17152 10.5 9 10.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Vault2;
