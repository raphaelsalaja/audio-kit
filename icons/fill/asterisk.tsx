import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Asterisk({
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
          d="M9,16.5c-.414,0-.75-.336-.75-.75V2.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75V15.75c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M14.845,13.125c-.127,0-.256-.032-.374-.101L2.779,6.274c-.358-.207-.481-.666-.274-1.024,.206-.358,.665-.483,1.024-.274l11.691,6.75c.358,.207,.481,.666,.274,1.024-.139,.241-.391,.375-.65,.375Z"
          fill={fill}
        />
        <path
          d="M3.155,13.125c-.26,0-.512-.134-.65-.375-.207-.359-.084-.817,.274-1.024L14.471,4.976c.36-.208,.817-.083,1.024,.274,.207,.359,.084,.817-.274,1.024L3.529,13.024c-.118,.068-.247,.101-.374,.101Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Asterisk;
