import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageMinus({
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
          d="M15.25 10.4395L13.1943 8.3838C12.122 7.3115 10.3779 7.3115 9.30563 8.3838L3.19733 14.4963C3.56393 14.9521 4.11943 15.25 4.75003 15.25H13.25C14.3546 15.25 15.25 14.3545 15.25 13.25V10.4395Z"
          fill={fill}
        />
        <path
          d="M6.25 8.5C6.94036 8.5 7.5 7.94036 7.5 7.25C7.5 6.55964 6.94036 6 6.25 6C5.55964 6 5 6.55964 5 7.25C5 7.94036 5.55964 8.5 6.25 8.5Z"
          fill={fill}
        />
        <path
          d="M16.75 4.5H11.75C11.3359 4.5 11 4.1641 11 3.75C11 3.3359 11.3359 3 11.75 3H16.75C17.1641 3 17.5 3.3359 17.5 3.75C17.5 4.1641 17.1641 4.5 16.75 4.5Z"
          fill={secondaryfill}
        />
        <path
          d="M2.00104 4.75C2.00104 3.23141 3.2317 2 4.75104 2H8.92834C9.34255 2 9.67834 2.33579 9.67834 2.75C9.67834 3.16421 9.34255 3.5 8.92834 3.5H4.75104C4.06037 3.5 3.50104 4.05959 3.50104 4.75V13.25C3.50104 13.9404 4.06037 14.5 4.75104 14.5H13.251C13.9417 14.5 14.501 13.9404 14.501 13.25V9.0728C14.501 8.65859 14.8368 8.3228 15.251 8.3228C15.6652 8.3228 16.001 8.65859 16.001 9.0728V13.25C16.001 14.7686 14.7704 16 13.251 16H4.75104C3.2317 16 2.00104 14.7686 2.00104 13.25V4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ImageMinus;
