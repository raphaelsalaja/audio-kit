import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folder5Open({
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
          d="M4.18,15.25h-.43c-1.105,0-2-.895-2-2V3.75c0-.552,.448-1,1-1h3.797c.288,0,.563,.125,.753,.342l2.325,2.658h5.626"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.187,8.25H5.308c-.472,0-.879,.329-.978,.79l-1.071,5c-.133,.623,.341,1.21,.978,1.21H15.115c.472,0,.879-.329,.978-.79l1.071-5c.133-.623-.341-1.21-.978-1.21Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Folder5Open;
