import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Armchair({
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
          d="M3.25 4.5C5.317 4.5 7 6.182 7 8.25V10H11V8.25C11 6.182 12.683 4.5 14.75 4.5C14.836 4.5 14.916 4.52 15 4.525V3.75C15 2.233 13.767 1 12.25 1H5.75C4.233 1 3 2.233 3 3.75V4.525C3.084 4.519 3.164 4.5 3.25 4.5Z"
          fill={secondaryfill}
        />
        <path
          d="M14.75 6C13.51 6 12.5 7.009 12.5 8.25V11.5H5.5V8.25C5.5 7.009 4.49 6 3.25 6C2.01 6 1 7.009 1 8.25C1 9.0774 1.40122 9.89608 2 10.3606V12.25C2 13.681 3.102 14.846 4.5 14.975V16.25C4.5 16.664 4.836 17 5.25 17C5.664 17 6 16.664 6 16.25V15H12V16.25C12 16.664 12.336 17 12.75 17C13.164 17 13.5 16.664 13.5 16.25V14.975C14.898 14.847 16 13.681 16 12.25V10.3594C16.6172 9.875 17 9.05859 17 8.25C17 7.009 15.99 6 14.75 6Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Armchair;
