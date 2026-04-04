import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookOpen({
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
          d="M16.146,2.981c-.748-.441-1.965-.967-3.52-.967h-.002c-1.602,0-2.851,.557-3.624,1.03-.773-.473-2.022-1.03-3.623-1.03h-.002c-1.555,0-2.772,.526-3.52,.967-.536,.315-.855,.877-.855,1.501V13.573c0,.581,.287,1.123,.766,1.45,.473,.322,1.071,.39,1.603,.181,.643-.253,1.314-.382,1.997-.383h.008c1.212,0,2.168,.404,2.757,.744,.038,.022,.08,.031,.119,.05V5.946c0-.414,.336-.75,.75-.75s.75,.336,.75,.75V15.615c.039-.019,.081-.028,.119-.05,.589-.339,1.544-.744,2.757-.744h.007c.683,0,1.354,.13,1.998,.383,.529,.208,1.127,.14,1.601-.182,.481-.328,.768-.871,.768-1.453V4.487c0-.618-.328-1.195-.854-1.506Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BookOpen;
