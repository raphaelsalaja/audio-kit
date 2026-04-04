import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoonStars({
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
          d="M8.54419 1.47446C8.70875 1.73227 8.70028 2.06417 8.52278 2.31324C7.88003 3.21522 7.5 4.31129 7.5 5.49999C7.5 8.53778 9.96222 11 13 11C14.0509 11 15.029 10.7009 15.8667 10.1868C16.1275 10.0267 16.4594 10.0412 16.7053 10.2233C16.9513 10.4054 17.0619 10.7186 16.9848 11.0148C16.0904 14.4535 12.9735 17 9.25 17C4.83179 17 1.25 13.4182 1.25 8.99999C1.25 5.08452 4.06262 1.83364 7.77437 1.14073C8.07502 1.0846 8.37963 1.21666 8.54419 1.47446Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.743 4.49198L11.797 4.17699L11.481 3.22999C11.379 2.92399 10.872 2.92399 10.77 3.22999L10.454 4.17699L9.508 4.49198C9.355 4.54298 9.25101 4.68598 9.25101 4.84798C9.25101 5.00998 9.355 5.15299 9.508 5.20399L10.454 5.51898L10.77 6.46599C10.821 6.61899 10.964 6.72199 11.125 6.72199C11.286 6.72199 11.43 6.61799 11.48 6.46599L11.796 5.51898L12.742 5.20399C12.895 5.15299 12.999 5.00998 12.999 4.84798C12.999 4.68598 12.896 4.54298 12.743 4.49198Z"
          fill={fill}
        />
        <path
          d="M14.25 8.5C14.664 8.5 15 8.1642 15 7.75C15 7.3358 14.664 7 14.25 7C13.836 7 13.5 7.3358 13.5 7.75C13.5 8.1642 13.836 8.5 14.25 8.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MoonStars;
