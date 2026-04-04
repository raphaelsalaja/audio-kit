import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperPlane4Clock({
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
          d="M14 10C11.7939 10 10 11.7944 10 14C10 16.2056 11.7939 18 14 18C16.2061 18 18 16.2056 18 14C18 11.7944 16.2061 10 14 10ZM16.3125 14.9502C16.1934 15.2398 15.9141 15.415 15.6191 15.415C15.5234 15.415 15.4277 15.3969 15.3339 15.3588L13.7148 14.6938C13.4336 14.5781 13.25 14.3042 13.25 14V12.25C13.25 11.8359 13.5859 11.5 14 11.5C14.4141 11.5 14.75 11.8359 14.75 12.25V13.4971L15.9043 13.9712C16.2871 14.1284 16.4707 14.5669 16.3125 14.9502Z"
          fill={fill}
        />
        <path
          d="M15.463 8.69724C15.3825 8.36382 15.167 8.05863 14.8167 7.87639L3.35075 1.92244C2.3583 1.40677 1.2373 2.33676 1.55296 3.40611L3.21074 9L1.5529 14.5939C1.23438 15.6668 2.3613 16.5916 3.3509 16.0775L8.53397 13.3863C8.83978 10.6404 11.1728 8.5 14 8.5C14.5065 8.5 14.9971 8.56869 15.463 8.69724Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default PaperPlane4Clock;
