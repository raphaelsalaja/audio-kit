import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Medal({
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
          d="M5.033,8.917L1.204,2.507c-.2-.333,.04-.757,.429-.757h3.084c.176,0,.338,.092,.429,.243l2.906,4.853"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.986,8.917l3.81-6.41c.2-.333-.04-.757-.429-.757h-3.084c-.176,0-.338,.092-.429,.243l-2.906,4.853"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.476,10.693c-.059-.181-.216-.312-.403-.34l-1.122-.163-.502-1.017c-.168-.342-.729-.342-.896,0l-.502,1.017-1.122,.163c-.188,.027-.345,.159-.403,.34-.059,.181-.01,.38,.127,.513l.812,.792-.192,1.118c-.032,.188,.045,.377,.199,.489,.154,.112,.358,.126,.526,.038l1.004-.527,1.004,.527c.073,.039,.152,.058,.232,.058,.104,0,.207-.032,.294-.096,.154-.112,.231-.301,.199-.489l-.192-1.118,.812-.792c.137-.133,.186-.332,.127-.513Z"
          fill={secondaryfill}
          stroke="none"
        />
        <circle
          cx="9"
          cy="11.5"
          fill="none"
          r="4.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Medal;
