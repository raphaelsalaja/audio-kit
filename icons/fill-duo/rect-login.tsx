import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectLogin({
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
          d="M12.25 1.5H6.75C5.23122 1.5 4 2.73122 4 4.25V13.749C4 15.2678 5.23122 16.499 6.75 16.499H12.25C13.7688 16.499 15 15.2678 15 13.749V4.25C15 2.73122 13.7688 1.5 12.25 1.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.0303 5.71975C7.7373 5.42675 7.2627 5.42675 6.9698 5.71975C6.6769 6.01275 6.6768 6.48727 6.9698 6.78017L8.4395 8.2499H1.75C1.3359 8.2499 1 8.5858 1 8.9999C1 9.414 1.3359 9.7499 1.75 9.7499H8.4395L6.9698 11.2196C6.6768 11.5126 6.6768 11.9873 6.9698 12.2802C7.1163 12.4267 7.30771 12.4998 7.50011 12.4998C7.69251 12.4998 7.8839 12.4267 8.0304 12.2802L10.7804 9.53017C11.0734 9.23717 11.0734 8.76253 10.7804 8.46963L8.0303 5.71975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RectLogin;
