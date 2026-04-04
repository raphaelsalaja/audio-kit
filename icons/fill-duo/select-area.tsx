import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SelectArea({
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
          d="M4.75 3.5C4.05921 3.5 3.5 4.05921 3.5 4.75C3.5 5.16421 3.16421 5.5 2.75 5.5C2.33579 5.5 2 5.16421 2 4.75C2 3.23079 3.23079 2 4.75 2C5.16421 2 5.5 2.33579 5.5 2.75C5.5 3.16421 5.16421 3.5 4.75 3.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.5 2.75C12.5 2.33579 12.8358 2 13.25 2C14.7692 2 16 3.23079 16 4.75C16 5.16421 15.6642 5.5 15.25 5.5C14.8358 5.5 14.5 5.16421 14.5 4.75C14.5 4.05921 13.9408 3.5 13.25 3.5C12.8358 3.5 12.5 3.16421 12.5 2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.75 12.5C3.16421 12.5 3.5 12.8358 3.5 13.25C3.5 13.9408 4.05921 14.5 4.75 14.5C5.16421 14.5 5.5 14.8358 5.5 15.25C5.5 15.6642 5.16421 16 4.75 16C3.23079 16 2 14.7692 2 13.25C2 12.8358 2.33579 12.5 2.75 12.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 2.75C7 2.33579 7.33579 2 7.75 2H10.25C10.6642 2 11 2.33579 11 2.75C11 3.16421 10.6642 3.5 10.25 3.5H7.75C7.33579 3.5 7 3.16421 7 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7 15.25C7 14.8358 7.33579 14.5 7.75 14.5H8.4266C8.84081 14.5 9.1766 14.8358 9.1766 15.25C9.1766 15.6642 8.84081 16 8.4266 16H7.75C7.33579 16 7 15.6642 7 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.25 7C15.6642 7 16 7.33579 16 7.75V8.42688C16 8.84109 15.6642 9.17688 15.25 9.17688C14.8358 9.17688 14.5 8.84109 14.5 8.42688V7.75C14.5 7.33579 14.8358 7 15.25 7Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.75 7C3.16421 7 3.5 7.33579 3.5 7.75V10.25C3.5 10.6642 3.16421 11 2.75 11C2.33579 11 2 10.6642 2 10.25V7.75C2 7.33579 2.33579 7 2.75 7Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.06531 10.4408C8.75305 9.58385 9.58406 8.75326 10.4407 9.06534L17.2954 11.5695C18.2555 11.9217 18.2254 13.2868 17.2558 13.5989L14.4856 14.4855L13.5993 17.2546C13.2863 18.2301 11.9206 18.2525 11.5699 17.2963L9.06531 10.4408Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SelectArea;
