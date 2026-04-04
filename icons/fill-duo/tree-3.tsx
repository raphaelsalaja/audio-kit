import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tree3({
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
          d="M9 13.5C12.4518 13.5 15.25 10.7018 15.25 7.25C15.25 3.79822 12.4518 1 9 1C5.54822 1 2.75 3.79822 2.75 7.25C2.75 10.7018 5.54822 13.5 9 13.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.7803 6.2197C11.4873 5.9267 11.0127 5.9267 10.7198 6.2197L9.75011 7.1894V5.7499C9.75011 5.3358 9.41421 4.9999 9.00011 4.9999C8.58601 4.9999 8.25011 5.3358 8.25011 5.7499V8.9394L7.2804 7.9697C6.9874 7.6767 6.5128 7.6767 6.2199 7.9697C5.927 8.2627 5.9269 8.7373 6.2199 9.0302L8.2502 11.0605V16.25C8.2502 16.6641 8.5861 17 9.0002 17C9.4143 17 9.7502 16.6641 9.7502 16.25V9.3105L11.7805 7.2802C12.0735 6.9872 12.0733 6.5126 11.7803 6.2197Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Tree3;
