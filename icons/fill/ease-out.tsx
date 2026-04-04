import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EaseOut({
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
          d="M16.4983 3.69954C16.5262 4.11282 16.2137 4.47043 15.8004 4.4983C13.4439 4.6572 11.1928 6.06625 9.27452 8.21974C7.3627 10.366 5.8485 13.1809 4.96512 15.976C4.8403 16.371 4.41893 16.59 4.02397 16.4651C3.62901 16.3403 3.41003 15.9189 3.53485 15.524C4.47348 12.5541 6.08427 9.54603 8.15446 7.22201C10.2182 4.90524 12.8061 3.1968 15.6995 3.0017C16.1128 2.97383 16.4704 3.28627 16.4983 3.69954Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.49594 1.75C2.39177 1.75 1.49594 2.64583 1.49594 3.75C1.49594 4.85417 2.39177 5.75 3.49594 5.75C4.33492 5.75 5.05361 5.23281 5.35044 4.5H8.50061C8.91482 4.5 9.25061 4.16421 9.25061 3.75C9.25061 3.33579 8.91482 3 8.50061 3H5.35044C5.05361 2.26719 4.33492 1.75 3.49594 1.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default EaseOut;
