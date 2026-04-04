import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartLock({
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
          d="m8,15.25v-1.5c0-1.1289.5972-2.1484,1.5073-2.7314.1201-1.9604,1.7524-3.5186,3.7427-3.5186,1.2727,0,2.3938.6409,3.0721,1.613.2645-.774.4279-1.6049.4279-2.501.009-2.528-2.042-4.597-4.586-4.612-1.195.015-2.324.49-3.164,1.306-.84-.8149-1.972-1.291-3.178-1.306-2.53.015-4.582,2.084-4.572,4.609,0,5.1349,5.061,8.2789,6.8077,9.211-.0331-.1858-.0577-.3748-.0577-.57Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.5,12.025v-.775c0-1.241-1.01-2.25-2.25-2.25s-2.25,1.009-2.25,2.25v.775c-.846.123-1.5.845-1.5,1.725v1.5c0,.965.785,1.75,1.75,1.75h4c.965,0,1.75-.785,1.75-1.75v-1.5c0-.879-.654-1.602-1.5-1.725Zm-2.25-1.525c.413,0,.75.336.75.75v.75h-1.5v-.75c0-.414.337-.75.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default HeartLock;
