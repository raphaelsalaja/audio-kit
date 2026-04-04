import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxPackage({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M12 11V23L22 18V6L12 11ZM19 15.6006C18.9999 15.6384 18.9781 15.6726 18.9443 15.6895L16.1445 17.0898C16.0781 17.1229 16 17.0743 16 17V9.16211L19 7.66211V15.6006Z"
          fill={secondaryfill}
          fillOpacity=".3"
          fillRule="evenodd"
        />
        <path
          d="M16 9V16.8382C16 16.9125 16.0782 16.9609 16.1447 16.9276L18.9447 15.5276C18.9786 15.5107 19 15.4761 19 15.4382V7.5"
          stroke={fill}
        />
        <path d="M19 7.5L9 2.5" stroke={fill} />
        <path d="M16 9L6 4" stroke={fill} />
        <path d="M12 11V23" stroke={fill} />
        <path
          d="M22 6L12.6708 10.6646C12.2485 10.8757 11.7515 10.8757 11.3292 10.6646L2 6"
          stroke={fill}
        />
        <path
          d="M8.25 13.125L7 12.5L5.75 11.875"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M21.4472 5.72361L12.6708 1.33541C12.2485 1.12426 11.7515 1.12426 11.3292 1.33541L2.55279 5.72361C2.214 5.893 2 6.23926 2 6.61803V17.382C2 17.7607 2.214 18.107 2.55279 18.2764L11.3292 22.6646C11.7515 22.8757 12.2485 22.8757 12.6708 22.6646L21.4472 18.2764C21.786 18.107 22 17.7607 22 17.382V6.61803C22 6.23926 21.786 5.893 21.4472 5.72361Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default BoxPackage;
